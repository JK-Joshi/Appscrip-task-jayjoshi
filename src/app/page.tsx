'use client'

//Custom Components
import Home from './Pages/Home/Home'

//Redux Imports
import { store } from '@/store';

//Third Party Imports
import { Provider } from 'react-redux';

const page = () => {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  )
}

export default page
