
import './App.css'
import CustomerReviewSection from './CustomerReviewSection/CustomerReviewSection'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import O2PlantsCarouselSection from './O2PlantsCarouselSection/O2PlantsCarouselSection'
import PlantListingGrid from './PlantListing/PlantListingGrid'

function App() {


  return (
    <>
      <Home />
      <PlantListingGrid />
      <CustomerReviewSection />
      <O2PlantsCarouselSection />
      <Footer/>
    </>
  )
}

export default App
