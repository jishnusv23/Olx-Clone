import { Fragment, useContext, useState } from "react";
import { AuthContext, FirebaseContext } from "../Store/FirebaseContext";
// import { ref } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number|null>(null);
  const [img, setImg] = useState<File | null>(null);
  console.log(name);
  const navigate=useNavigate()

  const firebaseContext = useContext(FirebaseContext);
  const authContext = useContext(AuthContext);
  if (!firebaseContext || !authContext) {
    return null;
  }
  const {user}=authContext
  console.log('the uid',user?.uid);
  
  const handleSubmit = async () => {
    if (!img) return; 

    try {
      const storageRef = ref(firebaseContext.storage, `images/${img.name}`);
      await uploadBytes(storageRef, img);

     
      const imageUrl = await getDownloadURL(storageRef); 
      console.log(
        "🚀 ~ file: Create.tsx:29 ~ handleSubmit ~ imageUrl:",
        imageUrl
      );
      console.log(price, "price");

    
      await addDoc(collection(firebaseContext.db, "products"), {
        name,
        category,
        price,
        imageUrl,
        userid:user?.uid
      });
     navigate(-1)
      setName("");
      setCategory("");
      setPrice(null);
      setImg(null);

      console.log("successfully added the products ");
    } catch (error) {
      console.error("Error showing in product add time", error);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
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
              value={price !== null ? price : ""}
              onChange={(e) =>
                setPrice(e.target.value ? parseFloat(e.target.value) : null)
              }
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
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Upload and Submit
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
