import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/employee')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create"  className="btn btn-info text-light"> Add New (+)</Link>
          </div>
          <table className="table table-bordered ">
            <thead className="table-dark text-emphasis-primary">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button className="btn btn-success">Edit</button>
                      <button className="btn btn-danger">Remove</button>
                      <button className="btn btn-primary">Details</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
