import React from "react";

export default function Vivo() {
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
              <u>VIVO</u>
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
                    Vivo
                    <br />
                  </td>
                  <td>
                    Y36 (8+128)
                    <br />{" "}
                  </td>
                  <td>
                    Meteor Black
                    <br />
                    Vibrant Gold
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
                    Vivo
                    <br />
                  </td>
                  <td>
                    Y56(4+128)(8+128)
                    <br />{" "}
                  </td>
                  <td>
                    Orange Shimmer
                    <br />
                    Black
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
                    Vivo <br />
                  </td>
                  <td>
                    Y200 5G(8+128G)(8+256G)
                    <br />{" "}
                  </td>
                  <td>
                    Desert Gold
                    <br />
                    Jungle Green
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
                    Vivo
                    <br />
                  </td>
                  <td>
                    V29 Pro(8+256G)(12+256G)
                    <br />{" "}
                  </td>
                  <td>
                    Himalayan Blue
                    <br />
                    Space Black
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
                    Vivo <br />
                  </td>
                  <td>
                    X100(12+256G)(16+512G)
                    <br />{" "}
                  </td>
                  <td>
                    Chen Ye Black,
                    <br /> Star Trail Blue
                    <br />
                    Sunset Orange
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
