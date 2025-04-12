'use client'

// React Imports
import { useEffect, useState } from 'react';

// Next Imports
import Image from 'next/image';

// Redux Imports
import { RootState } from '@/store';

// Third Party Imports
import { useSelector } from 'react-redux';

// Types
type SectionKey = 'idealFor' | 'occasion' | 'work'

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    isOutofStock: boolean;
    isWishListed: boolean;
    category: string;
}

interface FilterProps {
    setFilteredProducts: (products: Product[]) => void;
}

const FiltersSidebar = ({ setFilteredProducts }: FilterProps) => {

    // Redux State
    const products = useSelector((state: RootState) => state?.products?.products);

    // State
    const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
        idealFor: true,
        occasion: false,
        work: false,
    });
    const [filters, setFilters] = useState<string[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    // Effect to populate filter options based on available categories
    useEffect(() => {
        const uniqueCategories = [...new Set(products?.map(product => product?.category))];
        setFilters(uniqueCategories);
    }, [products]);

    // Toggle section visibility
    const toggleSection = (section: SectionKey) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    // Handle filter selection/deselection
    const handleFilterChange = (filter: string) => {
        const updatedFilters = selectedFilters.includes(filter)
            ? selectedFilters.filter(f => f !== filter)
            : [...selectedFilters, filter];

        setSelectedFilters(updatedFilters);

        const filteredData = updatedFilters.length === 0
            ? products
            : products?.filter(product => updatedFilters.includes(product?.category));

        setFilteredProducts(filteredData);
    };

    return (
        <div
            style={{
                maxWidth: '250px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1rem',
            }}
        >
            {/* Customizable Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" id="customizable" />
                <label htmlFor="customizable" style={{ fontWeight: 600 }}>
                    Customizable
                </label>
            </div>

            <hr style={{ width: '100%', border: '0.5px solid #ccc', margin: '0rem 0' }} />

            {/* IDEAL FOR Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div
                    onClick={() => toggleSection('idealFor')}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        padding: '1rem'
                    }}
                >
                    <div>
                        <p style={{ fontWeight: 600, paddingBottom: '0.5rem' }}>IDEAL FOR</p>
                        <p>All</p>
                    </div>
                    <Image
                        src={openSections.idealFor ? '/Assets/Images/arrow-up.svg' : '/Assets/Images/downArrow.svg'}
                        alt="Arrows"
                        width={15} height={25}
                    />
                </div>

                {openSections.idealFor && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1rem' }}>
                        <p style={{ color: '#BFC8CD', textDecoration: 'underline', userSelect: 'none' }}
                            onClick={() => setSelectedFilters([])}>
                            Unselect All
                        </p>
                        {
                            filters?.map((filter, i) => (
                                <label key={filter + i}>
                                    <input
                                        type="checkbox"
                                        style={{ marginRight: '10px' }}
                                        onChange={() => handleFilterChange(filter)}
                                    />
                                    {filter}
                                </label>
                            ))
                        }
                    </div>
                )}
            </div>

            <hr style={{ width: '100%', border: '0.5px solid #ccc', margin: '0rem 0' }} />

            {/* Occasion Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div
                    onClick={() => toggleSection('occasion')}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        padding: '1rem'
                    }}
                >
                    <div>
                        <p style={{ fontWeight: 600, paddingBottom: '0.5rem' }}>Occasion</p>
                        <p>All</p>
                    </div>
                    <Image
                        src={openSections.occasion ? '/Assets/Images/arrow-up.svg' : '/Assets/Images/downArrow.svg'}
                        alt="Arrows"
                        width={15} height={25}
                    />
                </div>

                {openSections.occasion && (
                    <div style={{ paddingLeft: '1rem' }}>
                        <p style={{ color: '#BFC8CD', textDecoration: 'underline' }}> Unselect All</p>
                    </div>
                )}
            </div>

            <hr style={{ width: '100%', border: '0.5px solid #ccc', margin: '0rem 0' }} />

            {/* Work Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div
                    onClick={() => toggleSection('work')}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        padding: '1rem'
                    }}
                >
                    <div>
                        <p style={{ fontWeight: 600, paddingBottom: '0.5rem' }}>Work</p>
                        <p>All</p>
                    </div>
                    <Image
                        src={openSections.work ? '/Assets/Images/arrow-up.svg' : '/Assets/Images/downArrow.svg'}
                        alt="Arrows"
                        width={15} height={25}
                    />
                </div>

                {openSections.work && (
                    <div style={{ paddingLeft: '1rem' }}>
                        <p style={{ color: '#BFC8CD', textDecoration: 'underline' }}> Unselect All</p>
                    </div>
                )}
            </div>

            <hr style={{ width: '100%', border: '0.5px solid #ccc', margin: '0rem 0' }} />
        </div>
    );
};

export default FiltersSidebar;
