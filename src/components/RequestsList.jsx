import React from "react";

const RequestsList = () => {
  return <div>RequestsList</div>;
};

export default RequestsList;

// import { useEffect, useState } from "react";

// const RequestsList = ({
//   setCurrentRequests,
//   setHidden,
//   requests,
//   fetchData,
// }) => {
//   const handleUpdate = (request) => {
//     setHidden(false);
//     setCurrentRequests(request);
//   };

//   const handleDelete = (id) => {
//     fetch("https://motul-backend.vercel.app/api/requests/" + id, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then(() => fetchData());
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     console.log(`requests: ${requests}`);
//   }, [requests]);

//   return (
//     <div className="ml-5 m-5 flex flex-col p-2 border-2 border-black w-1/2 h-auto  rounded-lg bg-white">
//       <div className="font-bold text-xl mb-2 text-center border-b-2 border-black bg-gray-500 rounded-lg shadow-xl">
//         Requests:{" "}
//       </div>
//       {requests.length > 0 &&
//         requests.map((request, index) => {
//           return (
//             <div
//               className="flex flex-row gap-2 mb-3 border-2 border-gray-400 bg-gray-300 font-semibold rounded-lg p-1"
//               key={index}
//             >
//               <div className="flex-1 flex flex-row ">
//                 <div>
//                   <span className="font-bold"> Name:</span> {request.name}
//                 </div>
//                 <div>
//                   <span className="font-bold"> Intensity: </span>
//                   {request.intensity}
//                 </div>
//               </div>
//               <button
//                 className="rounded-lg border-gray-900 bg-red-200 border-2 mr-3"
//                 onClick={() => handleUpdate(request)}
//               >
//                 Update
//               </button>
//               <button
//                 className="rounded-lg border-gray-900 bg-red-200 border-2 mr-3"
//                 onClick={() => handleDelete(request._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default RequestsList;
