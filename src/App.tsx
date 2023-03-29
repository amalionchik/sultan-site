import "./scss/App.scss";
import MainPage from "./pages/MainPage";
import { Routes, Route, Link } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

function App() {
   return (
      <div className="App">

			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="sultan-site/cart" element={<CartPage/>}/>
				<Route path="sultan-site/product" element={<ProductPage/>}/>
			</Routes>

      </div>
   );
}

export default App;
