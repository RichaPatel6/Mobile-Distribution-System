import React from 'react'
import Footer from './Footer'

function AddProducts() {
  return (
    <>
      <div className="container " />
      <div
        style={{
          boxShadow: "2cm",
          textShadow: "2cm",
          color: "rgb(4, 4, 10)",
          textAlign: "center"
        }}
      >
        <b>
          <h1>List Of Product</h1>
        </b>
      </div>

      <div
        className="col-10 row mb-5 margin-bottom:auto "
        style={{ paddingLeft: "15%" }}
      >
        <table className="table table-bordered">
          <thead className="border border-secondary, table-dark">
            <tr>
              <th scope="col">Images</th>
              <th scope="col">Names</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Add Product</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>image1</td>
              <td>
                Phone <br />
              </td>
              <td>
                samsung phone
                <br />
              </td>
              <td>
                100000
                <br />
              </td>
              <td>
                <button className="btn btn-success" type="submit">
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>

  )
}
export default AddProducts