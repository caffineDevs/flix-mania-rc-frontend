import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="mt-5">
      {/*footer starts from here*/}
      <footer className="footer">
        <div className="container-fluid bottom_border px-5">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
              {/*headin5_amrc*/}
              <p className="mb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>
                <i className="fa fa-location-arrow" /> 9878/25 sec 9 rohini 35{" "}
              </p>
              <p>
                <i className="fa fa-phone" /> +91-9999878398
              </p>
              <p>
                <i className="fa fa fa-envelope" /> info@example.com
              </p>
            </div>
            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
              {/*headin5_amrc*/}
              <ul className="footer_ul_amrc">
                <li>
                  <a href="#">Image Rectoucing</a>
                </li>
                <li>
                  <a href="#">Clipping Path</a>
                </li>
                <li>
                  <a href="#">Hollow Man Montage</a>
                </li>
                <li>
                  <a href="#">Ebay &amp; Amazon</a>
                </li>
                <li>
                  <a href="#">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="#">Image Cropping</a>
                </li>
              </ul>
              {/*footer_ul_amrc ends here*/}
            </div>
            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
              {/*headin5_amrc*/}
              <ul className="footer_ul_amrc">
                <li>
                  <a href="#">Remove Background</a>
                </li>
                <li>
                  <a href="#">Shadows &amp; Mirror Reflection</a>
                </li>
                <li>
                  <a href="#">Logo Design</a>
                </li>
                <li>
                  <a href="#">Vectorization</a>
                </li>
                <li>
                  <a href="#">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="#">Image Cropping</a>
                </li>
              </ul>
              {/*footer_ul_amrc ends here*/}
            </div>
            <div className=" col-sm-4 col-md  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
              {/*headin5_amrc ends here*/}
              <ul className="footer_ul2_amrc">
                <li>
                  <a href="#">
                    <i className="fa fa-twitter fleft padding-right" />{" "}
                  </a>
                  <a href="https://twitter.com/CaffineDevs" target="_blank">https://twitter.com/CaffineDevs</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram fleft padding-right" />{" "}
                  </a>
                  <a href="https://www.instagram.com/dev_arun_rana/" target="_blank">https://www.instagram.com/dev_arun_rana/</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook fleft padding-right" />{" "}
                  </a>
                  <a href="https://www.linkedin.com/in/arun-rana-680800180" target="_blank">https://www.linkedin.com/in/arun-rana-680800180</a>
                </li>
              </ul>
              {/*footer_ul2_amrc ends here*/}
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="foote_bottom_ul_amrc">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          {/*foote_bottom_ul_amrc ends here*/}
          <p className="text-center">
            Copyright @2017 | Designed With by <a href="#">Your Company Name</a>
          </p>
          <ul className="social_footer_ul">
            <li>
              <a href="#">
                <i className="fa fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
          {/*social_footer_ul ends here*/}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
