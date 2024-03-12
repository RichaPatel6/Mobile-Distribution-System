import React from "react";

export default function Oneplus() {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <div className="container " />
        <div
          style={{
            boxShadow: "2cm",
            textShadow: "2cm",
            color: "rgb(4, 4, 10)",
            textAlign: "center",
          }}
        >
          <b>
            {" "}
            <h1>MOBILE</h1>
          </b>
        </div>
        <b>
          <h4 style={{ textAlign: "center" }}>
            <b>
              <u>ONEPLUS</u>
            </b>
          </h4>
          <br />
          <div
            className=" col-10 row mb-5 margin-bottom:auto "
            style={{ paddingLeft: "15%" }}
          >
            <table className="table table-bordered">
              <thead className="border border-secondary, table-dark">
                <tr>
                  <th scope="col">Images</th>
                  <th scope="col">Names</th>
                  <th scope="col">Description</th>
                  <th scope="col">Color</th>
                  <th scope="col">Add to Cart</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>image1</td>
                  <td>
                    Oneplus
                    <br />
                  </td>
                  <td>
                    OnePlus 12 (12GB+256GB)(16GB+512GB)
                    <br />{" "}
                  </td>
                  <td>
                    Cool Blue <br />
                    Iron Gray
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image2</td>
                  <td>
                    Oneplus
                    <br />
                  </td>
                  <td>
                    OnePlus 11R (8GB+128 GB)(16GB+256 GB)
                    <br />{" "}
                  </td>
                  <td>
                    Galactic Silver
                    <br /> Sonic Black
                    <br />
                    Solar Red
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image3</td>
                  <td>
                    Oneplus <br />
                  </td>
                  <td>
                    OnePlus Nord 3 (8GB+128 GB)(12&nbsp;GB+256&nbsp;GB)
                    <br />{" "}
                  </td>
                  <td>
                    Tempest Gray
                    <br />
                    Misty Green{" "}
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image2</td>
                  <td>
                    Oneplus
                    <br />
                  </td>
                  <td>
                    OnePlus Nord CE 3 LITE (8GB+256GB)
                    <br />{" "}
                  </td>
                  <td>
                    {" "}
                    Chromatic Grey
                    <br /> Paste Lime
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b>
      </>
    </div>
  );
}
