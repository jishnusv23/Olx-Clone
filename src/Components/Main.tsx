import { useContext, useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import axios from "axios";
import Addproducts from "./Addproducts";
import { AuthContext, FirebaseContext } from "../Store/FirebaseContext";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");
  const authContext = useContext(AuthContext);
  const firebaseContext = useContext(FirebaseContext);
  if (!authContext || !firebaseContext) return null;
  const { user, setUser } = authContext;
  const { auth } = firebaseContext;
  console.log(auth, "auth");
  

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

    const user = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        setUser({uid:authuser.uid,displayName:authuser.displayName||""});
      } else {
        console.log("else");
      }
    });
    return () => {
      console.log("return ");

      user();
    };
  }, []);
  return (
    <div>
      <Navbar setSearch={setSearch} />
      <Menubar setMenu={setMenu} />
      {user && <Addproducts />}
      <Home products={products} search={search} menu={menu} />
      <Footer />
    </div>
  );
};

export default Main;
