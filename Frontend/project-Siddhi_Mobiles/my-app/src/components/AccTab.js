import React from "react";
import Header2 from "./Header2";
import Footer from "./Footer";

export default function AccTab() {
  return (
      <>
        <Header2></Header2>
        <div
          style={{
            boxShadow: "2cm",
            textShadow: "2cm",
            color: "rgb(4, 4, 10)",
            textAlign: "center",
          }}
        >
          <b>
            <h1>Samsung Product</h1>
          </b>
        </div>
        <b>
          <h4 style={{ textAlign: "center" }}>
            <b>
              <u> Samsung Tablets</u>
            </b>
          </h4>
          <br />
          <div
            className=" col-10 row mb-5 margin-bottom:auto "
            style={{ paddingLeft: "15%" }}
          >
            <br />
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
                  <td>Samsung</td>
                  <td>
                    Tab A7 Lite
                    <br />{" "}
                  </td>
                  <td>
                    sleek Gray
                    <br /> or Silver finish
                    <br />
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image1</td>
                  <td>
                    samsung <br />
                  </td>
                  <td>
                    Tab A7 Lite wifi
                    <br />{" "}
                  </td>
                  <td>
                    sleek Gray
                    <br /> or Silver finish
                    <br />
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
                    samsung
                    <br />
                  </td>
                  <td>
                    Tab A7
                    <br />{" "}
                  </td>
                  <td>
                    Dark Gray
                    <br />
                    Silver
                    <br />
                    Gold
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
                    samsung <br />
                  </td>
                  <td>
                    Tab A8 (3/32)
                    <br />{" "}
                  </td>
                  <td>Gray</td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image3</td>
                  <td>
                    samsung <br />
                  </td>
                  <td>
                    Tab A8 (4/64)
                    <br />{" "}
                  </td>
                  <td>
                    Gray
                    <br />
                    Silver
                    <br />
                    pink Gold
                    <br />
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
                    samsung <br />
                  </td>
                  <td>
                    Tab S6 Lite
                    <br />{" "}
                  </td>
                  <td>
                    Oxford Gray
                    <br />
                    Angora Blue
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
                    samsung <br />
                  </td>
                  <td>
                    Tab S7 FE 4/64 Wifi
                    <br />{" "}
                  </td>
                  <td>
                    Mystic Black
                    <br />
                    Mystic Grey
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
                    samsung <br />
                  </td>
                  <td>
                    Tab S7 FE 4/64
                    <br />{" "}
                  </td>
                  <td>
                    Mystic Black
                    <br />
                    Mystic Grey
                    <br />
                    Mystic Green
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
                    samsung <br />
                  </td>
                  <td>
                    Tab S7 FE 6/128
                    <br />{" "}
                  </td>
                  <td>
                    Mystic Black
                    <br />
                    Mystic Grey
                    <br />
                    Mystic green
                    <br />
                    Mystic pink
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
                    samsung <br />
                  </td>
                  <td>
                    Tab s8 (8/128 LTE)
                    <br />{" "}
                  </td>
                  <td>
                    Gray
                    <br />
                    Silver
                    <br />
                    pink Gold
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
                    samsung <br />
                  </td>
                  <td>
                    Tab s8+ (8/128 LTE)
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Pink Gold
                    <br />
                    Graphite
                    <br />
                    Silver
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
                    samsung Titanium
                    <br />
                  </td>
                  <td>
                    Watch5 BT 44mm R910
                    <br />{" "}
                  </td>
                  <td>
                    {" "}
                    Graphite
                    <br />
                    silver <br />
                    Pink gold
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
                    samsung <br />
                  </td>
                  <td>
                    Tab S8 Ultra (12/256) Wifi
                    <br />{" "}
                  </td>
                  <td>
                    Silver
                    <br />
                    Pink gold
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
                    samsung <br />
                  </td>
                  <td>
                    Tab S8 Ultra (12/256) LTE
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Silver
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
        <Footer></Footer>
      </>
  );
}
