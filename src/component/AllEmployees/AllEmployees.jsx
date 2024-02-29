import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar";




const AllEmployees = () => {
   
  
  const [myArticles, setMyArticles] = useState([]);
  console.log(myArticles);
  useEffect(() => {
    fetch("https://newspaper-final-server.vercel.app/articles")
      .then((res) => res.json())
      .then((data) => setMyArticles(data));
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://newspaper-final-server.vercel.app/article/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = myArticles.filter((item) => item._id !== _id);
            setMyArticles(remaining); //this line for delete
          });
      }
    });
  };

  const handleApprove = (_id) => {
    fetch(`https://newspaper-final-server.vercel.app/article/approved/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal("Welcome", "Article Approved successfully", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Error", "Article Approval failed", "error");
      });
  };
  const handlePremium = (_id) => {
    fetch(`https://newspaper-final-server.vercel.app/article/premium/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal("Welcome", "Article set as Premium successfully", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Error", "Setting Article as Premium failed", "error");
      });
  };
    return (
      <>
  <Sidebar/>
        <div className=" -mt-[650px] ml-48 w-96 ">
      <div className="overflow-x-auto h-screen  w-[1170px]">
        <table className="table mb-20">
          {/* head */}
          <thead className="">
            <tr>
              {/* <th></th> */}              
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Joining Date</th>
              <th>Designation</th>
              <th>Department</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myArticles.map((item) => (
              <tr key={item._id} className="hover">
                {/* <td className="-ml-5">{index + 1}</td> */}
                <td className="-ml-10">{item.publisher}</td>
                <td className="-ml-5">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img src={item.logo} alt="Avatar Component" />
                      </div>
                    </div>
                    <div className="">                      
                    {/* <div className="font-bold">{item.}</div>                       */}
                    </div>
                  </div>
                </td>
                <td className="-ml-10">{item.publisherEmail}</td>
                <td>
                  <div className="w-24 -ml-4">{item.createdAt}</div>
                </td>
                <td>{item.publisher}</td>
                <td>{item.publisher}</td>
              

               

              

                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
    );
};

export default AllEmployees;