import React from "react";
import Header2 from "./Header2";
import Footer from "./Footer";

export default function AccList() {
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
            {" "}
            <h1>Apple Products</h1>
          </b>
        </div>
        <b>
          <h4 style={{ textAlign: "center" }}>
            <b>
              <u>Apple</u>
            </b>
          </h4>
          <br />
          <div
            className=" col-10 row mb-5 margin-bottom:auto "
            style={{ paddingLeft: "15%" }}
          >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
                  <td>Apple</td>
                  <td>
                    Magsafe Charger
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    white
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
                    Apple <br />
                  </td>
                  <td>
                    20W Charger
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    white
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
                    iphone <br />
                  </td>
                  <td>
                    C type cable
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    white
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
                    Apple <br />
                  </td>
                  <td>
                    Airpods(3rd Gen)
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
                    <br />
                    Green
                    <br />
                    white
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
                  <td>SYSKA</td>
                  <td>
                    Wireless PowerBank
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    white
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
                    OnePlus <br />
                  </td>
                  <td>
                    Bullets Wireless Z<br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    white
                    <br />
                    Red
                    <br />
                    Green
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
                    Oneplus <br />
                  </td>
                  <td>
                    Nord Buds True Wireless
                    <br />{" "}
                  </td>
                  <td>
                    Black
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
                    Boat <br />
                  </td>
                  <td>
                    Rockerz 450 Wireless Bluetooth
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
                    <br />
                    Red
                    <br />
                    white
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
                    Boat <br />
                  </td>
                  <td>
                    Airdopes 281 Pro
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
                    <br />
                    Red
                    <br />
                    white
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
                  <td>samsung</td>
                  <td>
                    Watch 6<br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
                    <br />
                    White
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
                    Buds Live
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Pink
                    <br />
                    white
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
                    25W Super Fast Adapter with Type C to C Cable
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    White
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
                    45W Dual USB Car Charger
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    White
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image1</td>
                  <td>Samsung</td>
                  <td>
                    Watch4 BT 40mm R860
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
                    <br />
                    White
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
                    Buds2 R177
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Pink
                    <br />
                    white
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
                    Watch4 4G 40mm R865
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
                <tr>
                  <td>image3</td>
                  <td>
                    samsung <br />
                  </td>
                  <td>
                    Watch4 BT 44mm R870
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
                <tr>
                  <td>image3</td>
                  <td>
                    samsung <br />
                  </td>
                  <td>
                    Watch4 4G 44mm R875 <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Graphite
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
                    Watch4 Classic BT 42mm R880
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
                <tr>
                  <td>image3</td>
                  <td>
                    samsung <br />
                  </td>
                  <td>
                    Watch4 Classic 4G 42mm R885
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
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
                    Watch4 Classic BT 46mm R890
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
                <tr>
                  <td>image3</td>
                  <td>
                    samsung <br />
                  </td>
                  <td>
                    Watch4 Classic 4G 46mm R895
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
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
                    Watch5 BT 40mm R900
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
                <tr>
                  <td>image3</td>
                  <td>
                    samsung <br />
                  </td>
                  <td>
                    Watch5 LTE 40mm R905
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Pink Gold
                    <br />
                    Graphite, Silver, Sapphire
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
                    <br />{" "}
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
                    Watch5 LTE 44mm R915
                    <br />{" "}
                  </td>
                  <td>
                    Sapphire <br />
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
                    Watch5 Pro BT R920
                    <br />{" "}
                  </td>
                  <td>
                    Black Titanium
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
                    Watch5 Pro LTE 925
                    <br />{" "}
                  </td>
                  <td>
                    Black Titanium
                    <br />
                    Grey Titanium
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image1</td>
                  <td>samsung</td>
                  <td>
                    43TE50F Smart HD TV
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
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
                    32 Inches HD LED TV
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
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
                    32-Inch Class QLED
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
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
                    TV 43-inch Ultra HD 4K Smart LED TV
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image1</td>
                  <td>samsung</td>
                  <td>
                    43TE50F Smart HD TV
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
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
                    32 Inches HD LED TV
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
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
                    32-Inch Class QLED
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
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
                    TV 43-inch Ultra HD 4K Smart LED TV
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image1</td>
                  <td>MI</td>
                  <td>
                    4c 43
                    <br />{" "}
                  </td>
                  <td>
                    Black
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
                    MI <br />
                  </td>
                  <td>
                    LED Smart TV 4A 32
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
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
                    Xiaomi
                    <br />
                  </td>
                  <td>
                    X series 4K
                    <br />{" "}
                  </td>
                  <td>
                    Black
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
                    MI <br />
                  </td>
                  <td>
                    4X 55
                    <br />{" "}
                  </td>
                  <td>
                    Black
                    <br />
                    Grey
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
