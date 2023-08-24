import Content from '../components/Content'
import HomeGrid from '../components/HomeGrid'
import MainLayout from '../layouts/MainLayout'
import Footer from '../components/Footer'
import HomeGridProducts from '../components/HomeGridProducts'


const HomePage = () => {
    return(
        <MainLayout>
            <Content />
            <Footer />
            <HomeGrid />
            <HomeGridProducts />
        </MainLayout>
    )
}


export default HomePage