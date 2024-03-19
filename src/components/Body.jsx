import Products from "./Products"
import MockData from "../utils/MockData";
import Navbar from "./Navbar";


const Body = () => {
  return (
    <div>
         <Navbar />
          <Products  productsData = {MockData} />
        
    </div>
  )
}

export default Body