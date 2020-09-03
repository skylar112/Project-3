import React from "react";
import Api from "../../utils/API";

export default function Search(props) {
    function searchCar(event){
        Api.searchCar(event.target.value)
            .then(res => {
                console.log(res);
            })
    }

  return (
    <div className="form-group">
      <input className="form-control" onChange={searchCar} {...props} />
    </div>
  );
}
