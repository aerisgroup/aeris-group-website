import React from "react";

const FlipCard = props => {
  return (
    <div className="mx-auto my-5">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="lead mt-3">{props.title}</p>
            <img src={props.image} alt="product" />
          </div>
          <div className="flip-card-back p-3">
            <h3>{props.title}</h3>
            <ul class="list-group">
              <li class="list-group-item active">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
