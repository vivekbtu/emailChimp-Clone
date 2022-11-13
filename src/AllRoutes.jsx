import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddtoProduct from './AddtoProduct'
import AdminHome from './AdminHome'
import { EmailMarketing } from './Components/E-marketing/EmailMarketing'
import Home from './Components/myHome/Home'
import PriceComp from './Components/myHome/PriceComp'
import HelpCenterPage from './Components/ResourcesPages/HelpCenterPage'
import MailChimp from './Components/ResourcesPages/MailChimp'
import MarketingPage from './Components/ResourcesPages/MarketingPage'
import Login from './Components/Signup/Login'
import Signup from './Components/Signup/Signup'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/store' element={<AddtoProduct/>}></Route>
        <Route path='/adminhome' element={<AdminHome/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/mailchimp101' element={<MailChimp/>}></Route>
        <Route path='/marketing' element={<MarketingPage/>}></Route>
        <Route path='/helpcenter' element={<HelpCenterPage/>}></Route>
        <Route path='/emarketing' element={<EmailMarketing/>}></Route>
        <Route path='/pricing' element={<PriceComp/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes