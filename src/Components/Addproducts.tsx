import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../Store/FirebaseContext";
import { collection, getDocs } from "firebase/firestore";

const Addproducts = () => {
  const firebaseContext = useContext(FirebaseContext);
  const authContext=useContext(AuthContext)
  if (!firebaseContext) {
    return null;
  }
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firebaseContext.db, "products")
        );
        const productsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [firebaseContext]);
  console.log(products);

  if (!firebaseContext||!authContext) {
    return null;
  }
  const {user}=authContext
  

  return (
    
    <div className="grid grid-cols-4 p-5">
      {products &&user&&
        products.map((data: any) => {
          return (
            <div
              key={data.id}
              className="border border-spacing-1 p-2 ml-3 mt-3"
            >
              <img src={data.imageUrl} alt="" className="w-60 h-48" />
              <h1 className="font-bold text-xl">${data.price}</h1>
              <h1>{data.name}</h1>{" "}
              {/* Assuming the product name is stored in 'name' field */}
              <h1>{data.category}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default Addproducts;
