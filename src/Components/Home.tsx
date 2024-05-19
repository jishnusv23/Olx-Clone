import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";


type ProductProps = {
  products: any[];
  search: string;
  menu: string;
};

const Home = ({ products, search, menu }: ProductProps) => {
  
  const filteredProducts = products.filter((data: any) =>
    data.title.includes(search ? search : menu)
  );

  return (
    <div className="grid grid-cols-4 p-5">
      {filteredProducts.length === 0 ? (
        <div className="text-center text-red-500">No products found.</div>
      ) : (
        filteredProducts.map((data) => (
          <Link to={"/details"} state={{ data: data }} key={data.id}>
            <div className="border border-spacing-1 p-2 ml-3 mt-3">
              <img src={data.image} alt="" className="w-60 h-48" />
              <h1 className="font-bold text-xl">${data.price}</h1>
              <h1>{data.title}</h1>
              <h1>{data.category}</h1>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Home;
