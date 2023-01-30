import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ title, imageUrl, body }) {
  /*let navigate = useNavigate();
  const routeChange = () => {
    let path = `users`;
    navigate(path);
  };
  */
  console.log(imageUrl);
  const navigate = useNavigate();

  let navigateurl = "/" + title.toString().toLowerCase();
  console.log(navigateurl);

  return (
    <div className="">
      <img src={imageUrl} alt="Avatar" className="card_holder" />
      <div className="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{body}</p>
        <button onClick={() => navigate(navigateurl)}>{title}</button>
      </div>
    </div>
  );
}
