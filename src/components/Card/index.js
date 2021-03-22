import React from "react";
import "./style.css";

function Card() {
  return (
    <div className="container">
      <div className="card m-3" >
        <div className="row">
          <div className="col-md-4">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGBlVlUoKHiQQ/profile-displayphoto-shrink_200_200/0/1596412674827?e=1620259200&v=beta&t=tezFYjF9eYHuDD7CwUoU2I_JvmfDjXLWfXN9CkFbkgw" alt="Harrison Noblett"/>
          </div>
            <div className="col-md-8">
              <div className="card-body">
                  <h5 className="card-title ">Harrison Noblett</h5>
                  <ul>
                    <li>Email: HarrisonNoblett55@gmail.com</li>
                    <li>Github: <a href="https://github.com/HarrisonNoblett">Harrison Noblett</a></li>
                  </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;