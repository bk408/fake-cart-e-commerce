import Products from "./Products"
import MockData from "../utils/MockData";


const Body = () => {
  return (
    <div>
     
          <Products  productsData = {MockData} />
        
    </div>
  )
}

export default Body