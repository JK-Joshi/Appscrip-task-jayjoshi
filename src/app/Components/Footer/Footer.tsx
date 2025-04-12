//Next Imports
import Image from "next/image"

//React Imports
import { useState } from "react"

//Custom Hooks
import { useBreakpoint } from "@/Utils/CustomHooks/useBreakpoints/useBreakpoints"

const mettaMuse = [
    'About Us',
    'Stories',
    'Artisans',
    'Boutiques',
    'Contact Us',
    'EU Compliances Docs',
]

const quickLinks = [
    'Orders & Shipping',
    'Join / Login as a Seller',
    'Payment & Pricing',
    'Return & Refunds',
    'FAQs',
    'Privacy Policy',
    'Terms & Conditions',
]

const Footer = () => {
    const { isMobile, isTablet } = useBreakpoint()

    // Collapsible section toggles
    const [showMuse, setShowMuse] = useState(false)
    const [showQuickLinks, setShowQuickLinks] = useState(false)
    const [showFollowUs, setShowFollowUs] = useState(false)

    const isResponsive = isMobile || isTablet;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#000',
                padding: isResponsive ? '2rem' : '2rem 5rem'
            }}
        >
            {/* Upper Section */}
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: isResponsive ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: isResponsive ? '2rem' : '0'
                }}
            >
                {/* Subscribe Section */}
                <div
                    style={{
                        width: isResponsive ? '100%' : '60%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        color: '#fff'
                    }}
                >
                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Be the first to know</p>
                    <p style={{ fontSize: '0.9rem' }}>Sign up for updates from mettā muse.</p>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'flex-start',
                            gap: '0.5rem'
                        }}
                    >
                        <input
                            type='text'
                            placeholder='Enter your Email...'
                            style={{
                                width: isMobile ? '100%' : '40%',
                                padding: '0.8rem',
                                borderRadius: '5px',
                                border: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                width: isMobile ? '100%' : '20%',
                                padding: '0.8rem',
                                borderRadius: '5px',
                                color: 'gray',
                                backgroundColor: '#000',
                                border: '1px solid gray'
                            }}
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

                {/* Contact Section */}
                <div
                    style={{
                        width: isResponsive ? '100%' : '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        color: '#fff'
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>CONTACT US</p>
                        <p style={{ fontSize: '0.9rem' }}>+44 221 133 5360</p>
                        <p style={{ fontSize: '0.9rem' }}>customercare@mettamuse.com</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Currency</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <Image src={'/Assets/Images/US-flag.svg'} alt="flag" width={25} height={25} />
                            <p style={{ fontSize: '0.9rem' }}>• USD</p>
                        </div>
                        <p style={{ fontSize: '0.7rem' }}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>

            <hr style={{ width: '100%', border: '0.5px solid #ccc', margin: '1rem 0' }} />

            {/* Lower Section */}
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: isResponsive ? 'column' : 'row',
                    justifyContent: 'space-between',
                    gap: isResponsive ? '2rem' : '0',
                    marginTop: "2rem"
                }}
            >
                {/* Links Section */}
                <div
                    style={{
                        width: isResponsive ? '100%' : '60%',
                        display: 'flex',
                        flexDirection: isResponsive ? 'column' : 'row',
                        gap: isResponsive ? '1rem' : '20rem',
                        color: '#fff'
                    }}
                >
                    {/* mettā muse */}
                    <div>
                        <div
                            style={{ width: '100%', display: "flex", justifyContent: 'space-between', alignItems: 'center' }}
                            onClick={() => isResponsive && setShowMuse(!showMuse)}
                        >
                            <p
                                style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', cursor: isResponsive ? 'pointer' : 'default' }}
                            >
                                mettā muse
                            </p>
                            {
                                isResponsive &&
                                <Image
                                    src={showMuse ? '/Assets/Images/arrow-up.svg' : '/Assets/Images/downArrow.svg'}
                                    alt="Arrows"
                                    width={12} height={15}
                                    style={{
                                        filter: 'invert(100%) grayscale(100%) brightness(150%)'
                                    }}
                                />
                            }
                        </div>
                        {(showMuse || !isResponsive) && mettaMuse.map((item, i) => (
                            <p key={item + i} style={{ marginBottom: '0.9rem' }}>{item}</p>
                        ))}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div
                            style={{ width: '100%', display: "flex", justifyContent: 'space-between', alignItems: 'center' }}
                            onClick={() => isResponsive && setShowQuickLinks(!showQuickLinks)}
                        >
                            <p
                                style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', cursor: isResponsive ? 'pointer' : 'default' }}
                            >
                                Quick Links
                            </p>

                            {
                                isResponsive &&
                                <Image
                                    src={showQuickLinks ? '/Assets/Images/arrow-up.svg' : '/Assets/Images/downArrow.svg'}
                                    alt="Arrows"
                                    width={12} height={15}
                                    style={{
                                        filter: 'invert(100%) grayscale(100%) brightness(150%)'
                                    }}
                                />
                            }
                        </div>
                        {(showQuickLinks || !isResponsive) && quickLinks.map((item, i) => (
                            <p key={item + i} style={{ marginBottom: '0.9rem' }}>{item}</p>
                        ))}
                    </div>
                </div>

                {/* Follow Us + Payments Section */}
                <div
                    style={{
                        width: isResponsive ? '100%' : '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        color: '#fff'
                    }}
                >
                    <div>
                        <div
                            style={{ width: '100%', display: "flex", justifyContent: 'space-between', alignItems: 'center' }}
                            onClick={() => isResponsive && setShowFollowUs(!showFollowUs)}
                        >
                            <p
                                style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', cursor: isResponsive ? 'pointer' : 'default' }}
                            >
                                Follow Us
                            </p>
                            {
                                isResponsive &&
                                <Image
                                    src={showFollowUs ? '/Assets/Images/arrow-up.svg' : '/Assets/Images/downArrow.svg'}
                                    alt="Arrows"
                                    width={12} height={15}
                                    style={{
                                        filter: 'invert(100%) grayscale(100%) brightness(150%)'
                                    }}
                                />
                            }
                        </div>
                        {(showFollowUs || !isResponsive) && (
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <Image src={'/Assets/Images/Instagram.svg'} alt="Instagram Logo" width={25} height={25} />
                                <Image src={'/Assets/Images/LinkedIn.svg'} alt="LinkedIn Logo" width={25} height={25} />
                            </div>
                        )}
                    </div>

                    {/* Payments Accepted */}
                    <div>
                        <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>Payments Accepted</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <Image src={'/Assets/Images/G-pay.svg'} alt="G-pay Logo" width={50} height={30} />
                            <Image src={'/Assets/Images/Master-card.svg'} alt="Master-card Logo" width={50} height={30} />
                            <Image src={'/Assets/Images/Pay-pal.svg'} alt="Pay-pal Logo" width={50} height={30} />
                            <Image src={'/Assets/Images/Amex.svg'} alt="Amex Logo" width={50} height={30} />
                            <Image src={'/Assets/Images/Apple-pay.svg'} alt="Apple-pay Logo" width={50} height={30} />
                            <Image src={'/Assets/Images/O-pay.svg'} alt="O-pay Logo" width={50} height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
