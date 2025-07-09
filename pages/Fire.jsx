import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import SeviceBanner from "@/src/components/SeviceBanner";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Fire      = () => {
  return (
    <Layout header={3} footer={1}>
      <SeviceBanner pageName={" Fire Retardant Furniture and Fabrics"} bgImage="assets/images/allimg/fire/8.1.webp" />
      {/*====== Start Shop section ======*/}
      <section className="shop-page-section pt-95 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="sidebar-widget-area">
               
               
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget widget-category gray-bg mb-40 wow fadeInUp">
                  <h4 className="widget-title "> Fire Retardant Furniture and Fabrics
</h4>
  <p className="mb-30">
                 Wood Prism supplies fire retardant wooden Furniture like
Bed, Cabinets, Bed Side Table, Show Racks etc. We also
manufactureSteel furniture with tested and approved
Fire-Retardant Coatings. We provide sofas with high quality
fire retardant fabrics. We also supply fire retardant, anti
bacterial and waterproof Mattress, Blankets, Bed Covers,
Pillow, Bedsheet and curtain etc

                </p>
                  {/* <ul>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                     Single Bed

                      
                      </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="far fa-angle-double-right" />
                          &nbsp;&nbsp;
                    Bed Side Tables

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
                      Single Sofa

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
                    TV Unit

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
                     Shoe Racks

                      </a>
                    </li>
                   
                   
                  </ul> */}
                </div>
               
              </div>
            </div>
            <div className="col-xl-12 col-lg-12">
              {/*====== Products Filter ======*/}
            
              {/*====== Products Wrapper ======*/}
              <div className="products-wrapper">
                <div className="row">
                  <div className="col-md-6">
                    {/*====== Single Product Item ======*/}
                    <div className="single-product-item mb-30 wow fadeInUp">
                      {/* <div className="discount">10% OFF</div> */}
                      <div className="product-image">
                        <img
                          src="assets/images/allimg/fire/8.2.webp"
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
                          src="assets/images/allimg/fire/8.3.webp"
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
                          src="assets/images/allimg/fire/8.1.webp"
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
export default Fire;
