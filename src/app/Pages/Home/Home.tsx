'use client'

import Banner from '@/app/Components/Banner/Banner'
import Footer from '@/app/Components/Footer/Footer'
import Header from '@/app/Components/Header/Header'
import Products from '@/app/Components/Products/Products'


//Redux Imports
import { store } from '@/store';

//Third Party Imports
import { Provider } from 'react-redux';

const Home = () => {
    return (
        <div>
            <Provider store={store}>
                <Header />
                <Banner />
                <Products />
                <Footer />
            </Provider>
        </div>
    )
}

export default Home
