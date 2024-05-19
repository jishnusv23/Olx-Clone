import { useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import axios from "axios";
import Addproducts from "./Addproducts";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [menu,setMenu]=useState('')

  const getproducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        console.log("koko", response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  console.log(products, "qqq");

  useEffect(() => {
    getproducts();
  }, []);
  return (
    <div>
      <Navbar setSearch={setSearch}/>
      <Menubar setMenu={setMenu}/>
      <Addproducts/>
      <Home products={products} search={search} menu={menu} />
      <Footer />
    </div>
  );
};

export default Main;
