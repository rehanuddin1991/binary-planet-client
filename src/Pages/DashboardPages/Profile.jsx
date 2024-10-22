import { useContext, useEffect, useState } from "react";

import { FiEdit } from "react-icons/fi"; // Importing react-icon
import { AuthContext } from "../../Provider/AuthProvider";
import { backend_uri } from "../../CommonResources";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const navigate=useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user,233)
  const [users,setUsers]=useState([]);
  //console.log(344,`${backend_uri}/user/${user.uid}`)
  useEffect( ()=>{
    fetch(`${backend_uri}/user/${user.uid}`)
    .then((res)=>res.json())
    .then(data=>setUsers(data))
  
  },[])
 // const [userss,setUsers]=useState(userFromContext);
  //console.log(userFromContext,999)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    phone: "",
    photoURL: "",
    address: "",
  });

  // Update user info
  const handleUpdate = async () => {
    try {
      const updatedUser = {
        ...user,
        displayName: formData.displayName,
        phone: formData.phone,
        photoURL: formData.photoURL,
        address: formData.address,
      };

      // Make API call to update user information
      //console.log(`${backend_uri}/user/${user._id}`,2222)
      const response = await fetch(
        `${backend_uri}/user/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user information");
      }
      //console.log(`${backend_uri}/user/${user._id}`,45645)
      //fetch(`${backend_uri}/user/${user._id}`)
      //.then((res)=>res.json())
      //.then((data)=>setUsers(data))
      toast.success("profile updated successfully");
      
      navigate("/dashboard/profile")
      // Close the modal upon successful update
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating user:", error);
      alert("There was an error updating the user. Please try again.");
    }
  };

  // Open the edit modal with the user's current details
  const handleOpenEditModal = () => {
    setFormData({
      displayName: user.displayName || "",
      phone: user.phone || "",
      photoURL: user.photoURL || "",
      address: user.address || "",
    });
    setIsEditModalOpen(true);
  };

  return (
    <div className="p-6 dark:bg-[#1D232A] dark:text-[white] bg-white mt-4 sm:w-[26rem] sm:ml-12 lg:w-[37rem] xl:w-[50rem]
     md:w-[27rem] xs:w-[18rem] ssm:w-[21rem] rounded-lg shadow-lg relative">
       <Helmet>
    <title>Profile Page</title>

    </Helmet>
      <div className="flex flex-col items-center ">
        <img
          src={users?.photoURL}
          alt="Profile"
          className="w-36 h-36 object-cover rounded-full shadow-md"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-[white]">
          {users?.displayName}
        </h2>
        <p className="text-gray-500 dark:text-[white]">{users?.email}</p>
        <div>
          <strong
            className={!users?.isBlocked ? "text-green-500" : "text-red-500"}
          >
            {!users?.isBlocked ? "Active" : "Blocked"}
          </strong>
        </div>
      </div>

      <div className="mt-6 w-full">
        <h3 className="text-xl font-bold text-gray-700 dark:text-[white]">Profile Details</h3>
        <hr />
        <ul className="mt-3 text-gray-600 space-y-2 dark:text-[white]">
          <li>
            <strong>Role:</strong> {users?.isAdmin ? "Admin" : "User"}
          </li>
          <li>
            <strong>Email:</strong> {users?.email}
          </li>
          <li>
            <strong>Phone:</strong> {users?.phone || "N/A"}
          </li>
          <li>
            <strong>Address:</strong> {users?.address || "N/A"}
          </li>
          <hr />
          <li>
            <strong>Unique ID:</strong> {users?.uid}
          </li>
        </ul>
      </div>

      {/* Edit Button with React Icon */}
      {!users?.isBlocked ? (
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-105"
          // onClick={handleOpenEditModal}
        > <Link to={`/dashboard/user_edit/${user.uid}`} > <FiEdit size={24} /></Link> 
         
        </button>
      ) : null}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg xs:w-4/5 ssm:w-4/5 sm:w-4/5 w-1/3">
            <h3 className="text-xl mb-4">Edit User</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.displayName}
                onChange={(e) =>
                  setFormData({ ...formData, displayName: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Phone:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Photo URL:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.photoURL}
                onChange={(e) =>
                  setFormData({ ...formData, photoURL: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Address:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white p-2 rounded mr-2"
            >
               Update
            </button>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
