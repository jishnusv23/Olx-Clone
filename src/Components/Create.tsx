import React, { Fragment, useState } from "react";

const Create = () => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [img, setImg] = useState<File | null>(null);
  console.log(name);
  
  return (
    <Fragment>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <form >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                className="input w-full px-3 py-2 border border-gray-300 rounded-lg"
                type="text"
                id="name"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-700 font-bold mb-2"
              >
                Category
              </label>
              <input
                className="input w-full px-3 py-2 border border-gray-300 rounded-lg"
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                Price
              </label>
              <input
                className="input w-full px-3 py-2 border border-gray-300 rounded-lg"
                type="number"
                id="price"
                name="Price"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
              />
            </div>
            <div className="mb-4">
              <img
                alt="Posts"
                width="200px"
                height="200px"
                className="mx-auto mb-4"
                src={img ? URL.createObjectURL(img) : ""}
              />
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setImg(e.target.files[0]);
                  }
                }}
                className="block w-full text-gray-700"
              />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Upload and Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
