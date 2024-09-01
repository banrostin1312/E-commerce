import { ChangeEvent, useState } from "react";


const Contact:React.FC = () => {
const [userData, setUserData] = useState({
  name:"",
  email:"",
  phone:"",
  comment:""
});
  const handleChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const {name, value} = event.target;

  setUserData({...userData,[name]:value})
  };


  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      
   <form className="flex w-full max-w-lg flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
   <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
   <div>
      <label htmlFor="email">Name:</label>
      <input type="text" id="name"
       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
       onChange={handleChange}
       typeof="text"
       placeholder="Name"
       value={userData.name}
      />
    </div>


   <div>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email"
       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
       onChange={handleChange}
       typeof="text"
       placeholder="Email"
       value={userData.email}
      />
    </div> 
    <div>
      <label htmlFor="email">Phone:</label>
      <input type="text" id="phone"
       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
       onChange={handleChange}
       typeof="number"
       placeholder="phone"
       value={userData.phone}
      />
    </div>
    <div>
      <label htmlFor="comment">Comment:</label>
      <textarea name="comment" id="comment"
      value={userData.comment}
      onChange={handleChange}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
     placeholder="Enter your comment here"
      ></textarea>
    </div>
    <button type="submit" className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"> 
      Send
    </button>

   </form>
    </div>
  )
}

export default Contact;