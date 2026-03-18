import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Blogger from './Blogger'
import Bank from './Bank.jsx'
import Inventory from './Inventory.jsx'
import Meal from './Meal.jsx'
import { AppNameProvider } from './context/AppNameContext.jsx'  
import { ProductProvider } from './context/ProductContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppNameProvider> */}
      {/* <ProductProvider> */}
    {/* <App /> */}
    
    {/* <Bank/> */}
    {/* <Inventory/> */}
    {/* <Meal/> */}
    {/* </ProductProvider> */}
    
    {/* </AppNameProvider> */}
    <Blogger/>
  </StrictMode>,
  // fragment 
  // <div>
  // <h1 className='text-success bg-primary'>Hello world</h1>
  // <p>Greetings from mars</p>
  // </div>
)
