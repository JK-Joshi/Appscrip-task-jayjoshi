'use client'

// React Imports
import { useEffect, useState } from 'react';

// Next Imports
import Image from 'next/image';

// Custom Hooks
import { useBreakpoint } from '@/Utils/CustomHooks/useBreakpoints/useBreakpoints';
import { useDispatch } from 'react-redux';
import { setProducts } from '@/store/Products/ProductsReducer';

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    isOutofStock: boolean;
    isWishListed: boolean;
    category: string
}

interface ProductsGridProps {
    products: Product[];
    filteredProducts: Product[];
    setFilteredProducts: (products: Product[]) => void;
}

const ProductsGrid = ({ products, filteredProducts, setFilteredProducts }: ProductsGridProps) => {

    // Hooks
    const { isMobile } = useBreakpoint();
    const dispatch = useDispatch()

    useEffect(() => {
        // Enrich products with default values if missing
        if (products.length > 0) {
            const enriched = products.map((product) => ({
                ...product,
                isOutofStock: product.isOutofStock ?? false,
                isWishListed: product.isWishListed ?? false,
            }));
            setFilteredProducts(enriched);
        }
    }, [products]);

    // States
    const [productList, setProductList] = useState<Product[]>(filteredProducts);

    // Update productList whenever filteredProducts changes
    useEffect(() => {
        setProductList(filteredProducts);
    }, [filteredProducts]);

    // Functions
    const handleWishlist = (id: number) => {
        const updated = productList.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    isWishListed: !product.isWishListed,
                };
            }
            return product;
        });
        dispatch(setProducts(updated))
        setProductList(updated);
        setFilteredProducts(updated);
    };

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '2rem',
                padding: '1rem',
                width: '100%',
            }}
        >
            {productList.map((product) => (
                <div
                    key={product.id}
                    style={{
                        width: '100%',
                        maxWidth: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        padding: '0.5rem',
                        background: '#fff',
                        position: 'relative',
                    }}
                >
                    {/* Product Image */}
                    <div style={{ width: '100%', height: '250px', position: 'relative' }}>
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            style={{
                                objectFit: 'cover',
                                borderRadius: '6px',
                                opacity: product.isOutofStock ? 0.5 : 1,
                            }}
                        />

                        {product.isOutofStock && (
                            <div
                                style={{
                                    width: '100%',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                }}
                            >
                                <p style={{ textAlign: 'center' }}>Out of Stock</p>
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div
                        style={{
                            marginTop: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                        }}
                    >
                        <p style={{ fontWeight: 700, fontSize: '1rem' }}>{product.title}</p>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <p
                                style={{
                                    color: '#666',
                                    fontSize: '0.9rem',
                                    flex: 1,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {product.description}
                            </p>

                            <div onClick={() => handleWishlist(product.id)}>
                                {
                                    product.isWishListed ?
                                        <Image
                                            src="/Assets/Images/heart-red.svg"
                                            alt="Wishlist-Coloured"
                                            width={20}
                                            height={20}
                                            style={{ marginLeft: '0.5rem', cursor: 'pointer' }}
                                        />
                                        :
                                        <Image
                                            src="/Assets/Images/heart.svg"
                                            alt="Wishlist"
                                            width={20}
                                            height={20}
                                            style={{ marginLeft: '0.5rem', cursor: 'pointer' }}
                                        />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsGrid;
