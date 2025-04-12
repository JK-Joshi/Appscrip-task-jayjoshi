'use client'

//Custom Hooks Imports
import { useBreakpoint } from "@/Utils/CustomHooks/useBreakpoints/useBreakpoints"

const Banner = () => {

    //Custom hooks
    const { isMobile, isTablet } = useBreakpoint()

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                padding: '2rem 0.8rem'
            }}
        >
            {
                (isMobile || isTablet) &&
                <div style={{ width: '100%', display: 'flex', justifyContent: "flex-start", alignItems: 'center', gap: 10 }}>
                    <p style={{ textAlign: 'left' }}>Home</p>
                    <p style={{ textAlign: 'left', }}>|</p>
                    <p style={{ textAlign: 'left' }}>Shop</p>
                </div>
            }
            <h1
                style={{
                    maxWidth: '700px',
                    fontWeight: 500,
                    color: '#252020',
                    fontSize: isMobile ? '1.3rem' : '2.5rem',
                    textAlign: 'center'
                }}
            >
                DISCOVER OUR PRODUCTS
            </h1>
            <h3
                style={{
                    maxWidth: '650px',
                    fontWeight: 200,
                    color: '#252020',
                    textAlign: 'center',
                    fontSize: isMobile ? '0.9rem' : '1.2rem',
                    lineHeight: 2
                }}
            >
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </h3>
        </div>
    )
}

export default Banner
