import React, {useState, useEffect} from "react";


const AuthorDetails = ({ isOpen, onClose, authorDetails }) => {
  if (!isOpen) return null;

  // const [authorDetails, setAuthorDetails] = useState();
  // useEffect(() => {
  //     getAuthorDetails();
  // }, [author])

  return (
    <div
      
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          height: "auto",
          width: "60vw",
          margin: "auto",
          padding: "2%",
          
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
          >
              <div style={{width:"100%", backgroundColor:"red", position:"relative",  color:"white"}}>
                  Author Details
                  <button style={{position:"absolute", right:"0", cursor:"pointer"}} onClick={onClose}>X</button>
              </div>
              {!authorDetails && <div>Loading...</div>}
        {authorDetails && <div>
          <p>Author Name: {authorDetails.name}</p>
          {authorDetails.birth_date && <p>Birth Date: {authorDetails.birth_date}</p>}
          {authorDetails.death_date && <p>Death Date: {authorDetails.death_date}</p>}
          <p>Topwork: {authorDetails.top_work}</p>
          <p>Top Subjects: {authorDetails?.top_subjects?.join(", ")}</p>
        </div>}
      </div>
    </div>
  );
};

export default AuthorDetails;
