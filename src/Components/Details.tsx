import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  console.log("🚀 ~ file: Details.tsx:5 ~ Details ~ location:", location);

  return (
    <div className="flex">
      <img src={location?.state?.data?.image} alt="" className="w-96 h-96" />
      <div>
        <h1 className="font-bold text-3xl">${location?.state?.data?.price}</h1>
        <h1 className="mt-5">
          <span className="font-semibold">Category</span>:
          {location?.state?.data?.category}
        </h1>
        <h1 className="mt-5">
          {" "}
          <span className="font-semibold">Title</span>:
          {location?.state?.data?.title}
        </h1>
        <h1 className="mt-5">
          {" "}
          <span className="font-semibold">Description</span>:
          {location?.state?.data?.description}
        </h1>
      </div>
    </div>
  );
};

export default Details;
