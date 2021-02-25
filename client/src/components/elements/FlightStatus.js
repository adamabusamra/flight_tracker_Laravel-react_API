import React from "react";

const FlightStatus = ({ data }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center pt-3">
          <h1>{data.airline.name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4 text-center p-3">
          <h1>
            {data.departure.timezone.slice(
              data.departure.timezone.search("/") + 1
            )}
          </h1>
          <p style={{ color: "#003699" }}>{data.departure.airport}</p>
        </div>
        <div className="col-4 text-center p-3">
          <h1>
            <i
              class="fas fa-exchange-alt fa-2x"
              style={{ color: "#003699" }}
            ></i>
          </h1>
        </div>
        <div className="col-4 text-center p-3">
          <h1>
            {data.arrival.timezone.slice(data.arrival.timezone.search("/") + 1)}
          </h1>
          <p style={{ color: "#003699" }}>{data.arrival.airport}</p>
        </div>
      </div>
    </>
  );
};

export default FlightStatus;
