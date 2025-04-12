'use client'

// React Imports
import { useEffect, useState } from "react";

// Next Imports
import Image from "next/image";

// Custom Components
import FiltersSidebar from "../FilterSidebar/FilterSidebar";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

// Custom Hooks Imports
import { useBreakpoint } from "@/Utils/CustomHooks/useBreakpoints/useBreakpoints";
import { getProducts } from "@/store/Products/ProductsAction";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    isOutofStock: boolean;
    isWishListed: boolean;
}

interface Products {
    products: Product[];
}

const Products = () => {
    // Hooks
    const { isMobile } = useBreakpoint();
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.products);

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    // States
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>("RECOMMENDED");
    const [isHideFilters, setIsHideFilters] = useState<boolean>(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    // Functions
    const getProductsData = async () => {
        try {
            await getProducts(dispatch);
        } catch (err) {
            console.error(err);
        }
    };

    const options = [
        "RECOMMENDED",
        "Newest first",
        "Popular",
        "Price : high to low",
        "Price : low to high"
    ];

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isMobile ? '1rem 1rem' : '2rem 5rem'
            }}
        >
            {/* Products Header */}
            <hr style={{ width: '100%', border: '0.5px solid #ccc', margin: '1rem 0' }} />
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: isMobile ? 'right' : 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    position: 'relative',
                    gap: isMobile ? '5rem' : ""
                }}
            >
                {/* Items and Filter */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5rem'
                    }}
                >
                    <p style={{ display: isMobile ? 'none' : 'flex' }}>{products?.length} Items</p>
                    <div
                        onClick={() => setIsHideFilters(!isHideFilters)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 5
                        }}
                    >
                        <Image
                            src={'/Assets/Images/arrow-left.svg'}
                            alt="left arrow"
                            width={15}
                            height={25}
                            style={{
                                display: isMobile ? 'none' : 'flex'
                            }}
                        />
                        <p style={{
                            color: isMobile ? '#000' : '#888792',
                            textDecoration: isMobile ? 'none' : 'underline',
                            cursor: 'pointer',
                            userSelect: 'none',
                        }}
                        >
                            {isMobile ? 'Filters' : 'Hide filters'}
                        </p>
                    </div>
                </div>

                {/* Sort Dropdown */}
                <div style={{ position: 'relative' }}>
                    <div
                        onClick={toggleDropdown}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 5,
                            cursor: 'pointer'
                        }}
                    >
                        <p style={{ userSelect: 'none' }}>{selectedOption}</p>
                        <Image src={'/Assets/Images/downArrow.svg'} alt="Down Arrow" width={15} height={25} />
                    </div>

                    {isDropdownOpen && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: 0,
                                backgroundColor: '#fff',
                                borderRadius: '5px',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                zIndex: 1000,
                                padding: '0.5rem 0',
                                minWidth: '200px'
                            }}
                        >
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelect(option)}
                                    style={{
                                        padding: '0.75rem 1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        gap: '0.5rem',
                                        cursor: 'pointer',
                                        fontWeight: selectedOption === option ? 'bold' : 'normal',
                                    }}
                                >
                                    {selectedOption === option && <span>✔️</span>}
                                    <span>{option}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <hr style={{ width: '100%', border: '0.5px solid #ccc', margin: '1rem 0' }} />

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                {/* Filters SideBar */}
                {
                    !isHideFilters && !isMobile && <FiltersSidebar setFilteredProducts={setFilteredProducts} />
                }

                {/* Mobile Filter Drawer */}
                {isMobile && isHideFilters && (
                    <>
                        {/* Backdrop */}
                        <div
                            onClick={() => setIsHideFilters(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                zIndex: 999,
                            }}
                        />

                        {/* Sidebar Drawer */}
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '80%',
                                maxWidth: '300px',
                                height: '100vh',
                                backgroundColor: '#fff',
                                zIndex: 1000,
                                boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
                                padding: '1rem',
                                transition: 'transform 0.3s ease-in-out',
                                transform: isHideFilters ? 'translateX(0)' : 'translateX(-100%)'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                                <button
                                    onClick={() => setIsHideFilters(false)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '1.5rem',
                                        cursor: 'pointer',
                                    }}
                                >
                                    ✕
                                </button>
                            </div>
                            <FiltersSidebar setFilteredProducts={setFilteredProducts} />
                        </div>
                    </>
                )}

                {/* Products Grid */}
                <ProductsGrid products={products} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} />
            </div>
        </div>
    );
};

export default Products;
