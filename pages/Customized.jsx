import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import SeviceBanner from "@/src/components/SeviceBanner";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Customized     = () => {
  return (
    <Layout header={3} footer={1}>
      <SeviceBanner pageName={" Customized Work"} bgImage="assets/images/allimg/service/Customized/1.webp" />
      {/*====== Start Shop section ======*/}
      <section className="shop-page-section pt-95 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="sidebar-widget-area">
               
               
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget widget-category gray-bg mb-40 wow fadeInUp">
                  <h4 className="widget-title "> Customized Work
</h4>
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
                          src="assets/images/allimg/service/Customized/2.webp"
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
                          src="assets/images/allimg/service/Customized/3.webp"
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
                          src="assets/images/allimg/service/Customized/1.webp"
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
                          src="assets/images/allimg/service/Customized/4.webp"
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
export default Customized;
