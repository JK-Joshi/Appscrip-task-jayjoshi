'use client'

//Next Imports
import Image from 'next/image'

//React
import { useEffect, useState } from 'react'

//Custom Hooks
import { useBreakpoint } from '@/Utils/CustomHooks/useBreakpoints/useBreakpoints'
import { useSelector } from 'react-redux'
import { RootState } from "@/store";

//Constants
const menuItems = ['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US']

const Header = () => {

    //Hooks
    const { isMobile, isTablet } = useBreakpoint()
    const products = useSelector((state: RootState) => state.products.products);

    useEffect(() => {
        const count = products?.filter(product => product?.isWishListed)?.length || 0;
        setWishListCount(count);
    }, [products]);

    //States
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [wishListCount, setWishListCount] = useState<number>(0)

    //Functions
    const toggleDrawer = () => setIsDrawerOpen(prev => !prev)

    return (
        <div style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#fff' }}>
            {/* Drawer */}
            {(isMobile || isTablet) && isDrawerOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        height: '100vh',
                        width: '75%',
                        maxWidth: 300,
                        backgroundColor: '#fff',
                        boxShadow: '2px 0 10px rgba(0,0,0,0.2)',
                        padding: '2rem 1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        zIndex: 1000,
                        transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'transform 0.3s ease-in-out'
                    }}
                >
                    {/* Close Button */}
                    <div
                        style={{
                            alignSelf: 'flex-end',
                            cursor: 'pointer',
                            fontSize: '1.5rem'
                        }}
                        onClick={toggleDrawer}
                    >
                        ✕
                    </div>

                    {/* Menu Items */}
                    {menuItems.map((item, i) => (
                        <a
                            href='#'
                            key={item + i}
                            style={{
                                textDecoration: 'none',
                                color: '#000',
                                fontSize: '1.2rem'
                            }}
                        >
                            {item}
                        </a>
                    ))}

                    <hr />

                    {/* Profile and language */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                        <Image
                            src={'/Assets/Images/profile.svg'}
                            alt='Profile'
                            width={30}
                            height={30}
                        />
                        <p>Profile</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <p>Eng</p>
                        <Image
                            src={'/Assets/Images/downArrow.svg'}
                            alt='Language'
                            width={15}
                            height={7.5}
                        />
                    </div>
                </div>

            )}

            {/* Header Wrapper */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid lightgray',
                    padding: (isMobile || isTablet) ? '1rem' : '2rem 4rem',
                    gap: '2rem',
                }}
            >
                {/* Header */}
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        {(isMobile || isTablet) && (
                            <Image
                                src={'/Assets/Images/menu.svg'}
                                alt='Menu'
                                width={25}
                                height={30}
                                onClick={toggleDrawer}
                                style={{ cursor: 'pointer' }}
                            />
                        )}
                        <Image
                            src={'/Assets/Images/logoImage.svg'}
                            alt='Logo'
                            width={isMobile ? 25 : 100}
                            height={50}
                        />
                    </div>

                    <h2
                        style={{
                            fontSize: isMobile ? '1.2rem' : '2rem',
                            fontWeight: 900,
                            marginLeft: isMobile ? 0 : isTablet ? '2rem' : '10rem',
                        }}
                    >
                        LOGO
                    </h2>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: isMobile ? 0.5 : 1
                        }}
                    >
                        <Image src={'/Assets/Images/search.svg'} alt='Search' width={isMobile ? 30 : 50} height={25} />
                        <div style={{ position: 'relative', width: isMobile ? 30 : 50, height: 25 }}>
                            <Image
                                src={'/Assets/Images/heart.svg'}
                                alt='Heart'
                                width={isMobile ? 30 : 50}
                                height={25}
                            />
                            {wishListCount > 0 && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: -6,
                                        right: 0,
                                        backgroundColor: 'red',
                                        color: 'white',
                                        borderRadius: '150px',
                                        padding: '2px 4px',
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                        lineHeight: 1,
                                        minWidth: '12px',
                                        height: '12px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    {wishListCount}
                                </span>
                            )}
                        </div>
                        <Image src={'/Assets/Images/shopping-bag.svg'} alt='Bag' width={isMobile ? 30 : 50} height={25} />
                        {!isMobile && !isTablet && (
                            <>
                                <Image src={'/Assets/Images/profile.svg'} alt='Profile' width={50} height={25} />
                                <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <p>Eng</p>
                                    <Image src={'/Assets/Images/downArrow.svg'} alt='Down Arrow' width={15} height={7.5} />
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Menu (Desktop Only) */}
                <div
                    style={{
                        width: "100%",
                        display: (isMobile || isTablet) ? 'none' : 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '3rem',
                    }}
                >
                    {
                        Array.isArray(menuItems) && menuItems?.length > 0 &&
                        menuItems?.map((item, i) => (
                            <a
                                href='#'
                                key={item + i}
                                style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}
                            >
                                {item}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
