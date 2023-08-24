import React from 'react';
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

 const MainLayout = ({children}) => {
    return(
        <>
            <Navbar />
            <Topbar />
            {children}
        </>
    )
}

    export default MainLayout