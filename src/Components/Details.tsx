import React, { Fragment, useState, ChangeEvent, FormEvent } from "react";

const Create = () => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [img, setImg] = useState<File | null>(null);

  

 


  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImg(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, category, price, img });
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={handleSubmit}>
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
                onChange={(e)=>setName(e.target.value)}
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
                onChange={(e)=>setCategory(e.target.value)}
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
                value={price === undefined ? "" : price}
                onChange={(e)=>  setPrice(Number(e.target.value))}
              />
            </div>
            <div className="mb-4">
              {img && (
                <img
                  alt="Posts"
                  width="200px"
                  height="200px"
                  className="mx-auto mb-4"
                  src={URL.createObjectURL(img)}
                />
              )}
              <input
                type="file"
                onChange={handleImgChange}
                className="block w-full text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Upload and Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
