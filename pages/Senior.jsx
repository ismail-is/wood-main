import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import SeviceBanner from "@/src/components/SeviceBanner";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Senior = () => {
  return (
    <Layout header={3} footer={1}>
      <SeviceBanner pageName={"Senior & Manager Accommodation"} bgImage="assets/images/allimg/service/senior/1.webp" />
      {/*====== Start Shop section ======*/}
      <section className="shop-page-section pt-95 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="sidebar-widget-area">
               
               
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget widget-category gray-bg mb-40 wow fadeInUp">
                  <h4 className="widget-title ">Senior & Manager Accommodation</h4>
                  <ul>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                      Wooden Double Bed
                      
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                     Bed Side table
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                     Dressing Table with Mirror
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                     Three Door Cabinets
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                    Chest of Drawer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                     Writing Desk with Chair
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                     Coffee Table
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                      Sofa
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                     Easy Chairs
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                     Visitor Table
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                    Dining Table
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                     TV Unit
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                     Shoe Racks
                      </a>
                    </li>
                   
                  </ul>
                </div>
               
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              {/*====== Products Filter ======*/}
            
              {/*====== Products Wrapper ======*/}
              <div className="products-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    {/*====== Single Product Item ======*/}
                    <div className="single-product-item mb-30 wow fadeInUp">
                      {/* <div className="discount">10% OFF</div> */}
                      <div className="product-image">
                        <img
                          src="assets/images/allimg/service/senior/1.webp"
                          alt="Products Image"
                        />
                      </div>
                     
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*====== Single Product Item ======*/}
                    <div className="single-product-item mb-30 wow fadeInUp">
                      <div className="product-image">
                        <img
                          src="assets/images/allimg/service/senior/3.webp"
                          alt="Products Image"
                        />
                      </div>
                     
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*====== Single Product Item ======*/}
                    <div className="single-product-item mb-30 wow fadeInUp">
                      <div className="product-image">
                        <img
                          src="assets/images/allimg/service/senior/4.webp"
                          alt="Products Image"
                        />
                      </div>
                     
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*====== Single Product Item ======*/}
                    <div className="single-product-item mb-30 wow fadeInUp">
                      <div className="product-image">
                        <img
                          src="assets/images/allimg/service/senior/2.webp"
                          alt="Products Image"
                        />
                      </div>
                     
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*====== Single Product Item ======*/}
                    <div className="single-product-item mb-30 wow fadeInUp">
                      <div className="product-image">
                        <img
                          src="assets/images/allimg/service/senior/5.webp"
                          alt="Products Image"
                        />
                      </div>
                     
                    </div>
                  </div>
                 
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/*====== End Shop section ======*/}
      {/*====== Start Partners Section ======*/}
    </Layout>
  );
};
export default Senior;
