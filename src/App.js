import CurvedCarousel from "./Components/CurvedCarousel/CurvedCarousel";
import CustomCursor from "./Components/CustomCursor";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      
      <div className="p-5 d-flex justify-content-center align-items-center" style={{height: '500px'}}>
        <img className="img-fluid" src="https://d3ui957tjb5bqd.cloudfront.net/op/font-preview/5567667/4/14?s=%7B%22size%22%3A144%2C%22text%22%3A%22Indoor%20Plants%20made%20easy%22%2C%22fontSizes%22%3A%5B24%2C36%2C48%2C72%5D%2C%22retina%22%3Atrue%7D" />
      </div>
      <CurvedCarousel />
      <CustomCursor />
    </div>
  );
}

export default App;
