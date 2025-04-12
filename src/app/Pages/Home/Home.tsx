'use client'

import Banner from '@/app/Components/Banner/Banner'
import Footer from '@/app/Components/Footer/Footer'
import Header from '@/app/Components/Header/Header'
import Products from '@/app/Components/Products/Products'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Products />
            <Footer />
        </div>
    )
}

export default Home
