type menuProps = {
  setMenu: (value: string) => void;
};

const Menubar = ({ setMenu }: menuProps) => {
  return (
    <div className="flex shadow-sm h-12 p-2 bg-gray-100">
      <h1 onClick={() => setMenu("Shirt")} className="ml-48 text-lg font-bold">
        Shirt
      </h1>
      <h1 onClick={() => setMenu("Bikes")} className="ml-5 text-lg font-bold">
        Bikes
      </h1>
      <h1
        onClick={() => setMenu("Electronics")}
        className="ml-5 text-lg font-bold"
      >
        Electronics
      </h1>
      <h1 onClick={() => setMenu("Jobs")} className="ml-5 text-lg font-bold">
        Furniture
      </h1>
      <h1 onClick={() => setMenu("Shirt")} className="ml-5 text-lg font-bold">
        Jobs
      </h1>
      <h1
        onClick={() => setMenu(" Real Estate")}
        className="ml-5 text-lg font-bold"
      >
        Real Estate
      </h1>
      <h1
        onClick={() => setMenu("Services")}
        className="ml-5 text-lg font-bold"
      >
        Services
      </h1>
      <h1
        onClick={() => setMenu(" Fashion")}
        className="ml-5 text-lg font-bold"
      >
        Fashion
      </h1>
    </div>
  );
};

export default Menubar;
