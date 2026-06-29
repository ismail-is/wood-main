import Counter from "@/src/components/Counter";
import Partners from "@/src/components/Partners";
import HeroVideo from "@/src/components/HeroVideo";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const Index = () => {
  return (
    <Layout header={3} footer={1}>
      {/*====== Start Banner Section ======*/}
      <HeroVideo />
      {/*====== End Banner Section ======*/}


{/* section 2 */}
 <section className="about-section">
        <div className="container-fluid">
          {/*=== About Wrapper ===*/}
          <div className="about-wrapper gray-bg wow fadeInUp">
            <div className="container">
              <div className="row align-items-xl-center">
                <div className="col-xl-5 col-lg-12">
                  {/*=== About Image Box ===*/}
                  <div className="about-two_image-box wow fadeInLeft">
                    <img src="/assets/images/allimg/Image.webp" alt style={{height:'100%'}}/>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-12">
                  {/*=== About Content Box ===*/}
                  <div className="about-three_content-box pl-lg-70 wow fadeInRight">
                    {/*=== Section Title ===*/}
                    <div className="section-title  wow fadeInUp">
                      <span className="sub-title">
                        {/* <i className="flaticon-plant" /> */}
                        About Us
                      </span>
                      <h2>Furniture Fabrication & Reconditioning</h2>
                    </div>
                    <p className="mb-40 wow fadeInDown">
                     Wood Prism Factory is dealing with various aspects of furniture. We are specialized in staff and labor Accommodation furniture. We are one of the Largest stock holder and distributer of the furniture in the Eastern Province. Our own fabrication shops are facilitating us to deliver the customer with the high quality customized furniture for their accommodation needs. We are serving leading Aramco Projects, Sabin Project Sites, MNCs, Government Sector clients, Luxury Compounds and Hotels. Wood Prism has marked itself as the most trusted brand as a retailer, wholesaler, distributor and service provider in the Kingdom. Our specialized team enables to provide on time service and delivery throughout the Kingdom
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* start */}
      
      {/* start */}
{/* section 2 */}




{/* section 3 */}
  <section className="skills-section pt-10 pb-50">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-xl-6 col-lg-12">
              {/*====== Skill Content Box ======*/}
              <div className="skill-content-box mb-35 mr-lg-50 wow fadeInLeft">
                {/*====== Section-title ======*/}
                <div className="section-title mb-25">
                  <span className="sub-title">
                    {/* <i className="flaticon-plant" />
                    We’re Skilled Full */}
                  </span>
                  <h2> Woodprism with the strong foothold in Kingdom of
Saudi Arabia
</h2>
                </div>
                <p className="mb-30">
                  Dealing in various aspects of furniture
and specialized in office furniture, staff and labor
accommodation furniture and reconditioning of
furniture.
We are one of the largest stock holder and distributor
of the furniture in the eastern province. Our own
fabrications shops are facilitating us to deliver
customer with high quality customized furniture for
their accommodation needs.
Woodprism Furniture has served leading Aramco
Projects, Sabic Project Sites, MNCs, Government Sector
Clients and Hotel Clients since decade for their
accommodation needs.
Woodprism has marked itself as the most trusted
brand as retailer, wholesaler, distributor and service
provider in the kingdom. Our specialized team enables
to provide o time services and delivery throughout the 
kingdom.


                </p>
                {/*====== Skills List ======*/}
                {/* <ul className="skills-list">
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Gardening</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "89%" }}
                        />
                      </div>
                      <span className="number">89%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Landscape</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "83%" }}
                        />
                      </div>
                      <span className="number">83%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Maintenance</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "93%" }}
                        />
                      </div>
                      <span className="number">93%</span>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*====== Skills Image Box ======*/}
              <div className="skill-two_image-box mb-20 p-r z-1 wow fadeInRight">
                <img
                  src="assets/images/allimg/home2/home3.webp"
                  className="skill-img-one"
                  alt="Skill Image"
                />
                <img
                  src="assets/images/allimg/home2/home4.webp"
                  className="skill-img-two"
                  alt="Skill Image"
                />
                <div className="circle-logo">
                  <div className="inner-circle">
                    <br/>
                     <img
                  src="assets/images/allimg/home/2030.png"
                  className="skill-img-two"
                  alt="Skill Image"
                  
                />
                    {/* <h5>Gadden</h5> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End 
{/* section 3 */}


{/* section 4 */}
  <section className="fact-bg-section p-r z-1 main-bg pb-10" >
        <div className="circle-wrapper ">
          <span />
          <span />
          <span />
        </div>
         <div className="section-title mb-50 pr-lg-70 wow fadeInLeft">
                {/* <span className="sub-title">
                  <i className="flaticon-plant" />
                  Photo Gallery
                </span> */}
                <h2 className="text-white text-center">Why Choose Us?</h2>
                <br/>
              </div>
        <div className="container ">
          <div className="row">
            
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h3 className="number">
                 Own Factory

                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column mb-4">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h3 className="number">
                 Global Vendor Network


                </h3>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h3 className="number">
                 Wide Variety of Products


                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h3 className="number">
                  Large Warehouses

                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h3 className="number">
                 Readily available Accommodation Model Display


                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h3 className="number">
                 Customized Product


                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h3 className="number">
                 Multiple Retail and Wholesale Outlets


                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h3 className="number">
                 Overseas Woodprism Offices


                </h3>
              </div>
            </div>
            
           
          </div>
        </div>
      </section>
{/* section 4 */}

  <Partners />

{/* section 5 */}
   <section className="service-bgc-section p-r z-1 main-bg pt-150 pb-70">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/leaf-1.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/shape/leaf-2.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-three">
          <span>
            <img src="assets/images/shape/leaf-3.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              {/*====== Section Title ======*/}
              
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                {/* <span className="sub-title">
                  <i className="flaticon-plant" />
                  Popular Services
                </span> */}
                <h2>Products and Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
           <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
                <Link legacyBehavior href="/Repair">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/Repair">
                      <a> Repair & Restoration</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/Repair">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home2/8.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
              </Link>
            </div>


             <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
                <Link legacyBehavior href="/staff">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/staff">
                      <a> Staff Accommodation</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/staff">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home2/2.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
              </Link>
            </div>



             <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
                <Link legacyBehavior href="/Labor">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/Labor">
                      <a>  Labor Accommodation </a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/Labor">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home2/3.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
              </Link>
            </div>



             <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
                <Link legacyBehavior href="/Office">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/Office">
                      <a> Office Furniture</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/Office">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home2/4.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
              </Link>
            </div>


             <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
                <Link legacyBehavior href="/Hotel">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/Hotel">
                      <a> Hotel Furniture</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/Hotel">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home2/5.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
              </Link>
            </div>


             <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
                <Link legacyBehavior href="/Customized">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/Customized">
                      <a> Customized Work</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/Customized">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home2/6.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
              </Link>
            </div>


             <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
                <Link legacyBehavior href="/Fire">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/Fire">
                      <a>  Fire Retardant Furniture and Fabrics</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/Fire">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home2/7.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
              </Link>
            </div>




           <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
                <Link legacyBehavior href="/Senior">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/Senior">
                      <a> Senior & Manager Accommodatin</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/Senior">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home2/1.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
              </Link>
            </div>





             





              



              
           
           












           
          </div>
        </div>
      </section>
{/* section 5 */}



{/* section 6 */}
  {/* <section className="about-bg-section">
        <div
          className="about-bg bg_cover wow fadeInLeft"
          style={{ backgroundImage: "url(assets/images/allimg/home2/home5.webp)" }}
        />
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6">
              <div className="about-two_content-box pb-80 wow fadeInRight">
                <div className="section-title">
                  <div className="section-title mb-50">
                    <span className="sub-title">
                    </span>
                    <h2>Collaborative Partnership</h2>
                  </div>
                  <p className="mb-45">
                    We have collaborative business partnership with
various furniture factories and traders across Saudi
Arabia. Usually clients need different design, color,
and choice of furniture. Our collaborative partnership
with other companies enabled us to accomplish the
needs of our clients
                  </p>
                  <div className="inner-content">
                      <ul className="check-style-one mb-45">
                        <li>
                          <i className="far fa-check" />
                          Salah Bin-Shihon Trading Establishment in Dammam, Faizaliah

                        </li>
                        <li>
                          <i className="far fa-check" />
                          Eastern Village Furniture in Dammam

                        </li>
                        <li>
                          <i className="far fa-check" />
                          Saudi Modern Factory


                        </li>
                        <li>
                          <i className="far fa-check" />
                           Manjara Yousuf Bawadi, Dammam for Wooden

                        </li>
                        <li>
                          <i className="far fa-check" />
                          Accommodation Furniture

                        </li>
                        <li>
                          <i className="far fa-check" />
                          BTT Furniture, Riyadh (Cubicle Manufacturer)

                        </li>
                        <li>
                          <i className="far fa-check" />
                          Shahin Trading Company for Office Furniture

                        </li>
                        <li>
                          <i className="far fa-check" />
                          Safa Al-Madinah Foam Co

                        </li>
                      </ul>
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn primary-btn">Learn More Us</a>
                      </Link>
                    </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
{/* section 6 */}




{/* section 7 */}
  <section className="project-section " style={{marginTop:'100px'}}>
     <div className="section-title mb-50">
                    <span className="sub-title">
                      {/* <i className="flaticon-plant" />
                      About Gardening */}
                    </span>
                    <h2 className="text-center">Recently Completed Projects</h2>
                  </div>
        <div className="container-fluid">
          <Slider
            {...sliderProps.projectsSliderFour}
            className="projects-slider-four wow fadeInUp"
            data-wow-delay=".2s"
          >
            {[...Array(48)].map((_, index) => {
              const projectTitles = [
                "Nesma & Partners Contracting Co. LTD",
                "SHYB2-Denfense Facilities",
                "Byrne Camp Furniture",
                "Golden Tulip Hotel",
                "Larsen and Toubro Accommodation Project",
                "SATCO Neom Accommodation Project",
                "Saudi Archirodon Office Al Khobar",
                "Sendan Residence Hotel Accommodation Furniture",
                "Yamama Site Office, Ithra"
              ];
              const title = projectTitles[index] || `Project ${index + 1}`;
              return (
                <div className="single-project-item-four" key={index}>
                  <div >
                  {/* <div className="project-img"> */}
                    <img
                      src={`assets/images/work/${index + 1}.jpeg`}
                      alt={`Project Image ${index + 1}`}
                      style={{ height: '350px', width: '100%', objectFit: 'cover',borderRadius:'20px' }}
                    />
                    <div className="hover-content">
                      <div className="text text-white">
                        <h3 className="title"></h3>
                      </div>
                    </div>
                    <div className="project-content">
                      <div className="text text-white">
                        {/* <h3 className="title">
                          <Link legacyBehavior href="/gallery">
                            <a>{title}</a>
                          </Link>
                        </h3> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
           
          </Slider>
        </div>
      </section> 
{/* section 7 */}

{/* section 8 */}
 <section className="blog-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  {/* <i className="flaticon-plant" />
                  News &amp; Blog */}
                </span>
                <h2>Factories Across the Saudi Arabia</h2>
                  {/* <a>We have affiliated furniture factories that deals with the designing, fabrication, processing and preparation of furniture such as office furniture, accommodation furniture, metal furniture, upholstery products.
</a>  */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="single-blog-post-two mb-40 wow wow fadeInUp"
                data-wow-delay=".2s"
              ><div className="post-thumbnail">
                  <img
                    src="assets/images/allimg/asset/1.webp"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                   <h4 className="entry-title">
                      <a>Al Howali Wood </a>
                  </h4>
                  <div className="post-meta">
                    <span className="date">
                        <a>Place: Dammam | Area: 30000 SQM <br/>
                        Manpower: 100 | Warehouse: 2
</a>
                    </span>
                
                  </div>
                 
                 
                </div>
                
              </div>
            </div> */}

              <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======*/}
              <div
                className="single-blog-post-two mb-40 wow wow fadeInUp"
                data-wow-delay=".2s"
              ><div className="post-thumbnail">
                  <img
                    src="assets/images/allimg/asset/2.webp"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                   <h4 className="entry-title">
                      <a>Woodprism factory
</a>
                  </h4>
                  {/* <div className="post-meta">
                    <span className="date">
                        <a>Place: Dammam | Area: 600 SQM
 <br/>
                       Manpower: 20 | Warehouse: 1

</a>
                    </span>
                
                  </div> */}
                 
                 
                </div>
                
              </div>
            </div>



              {/* <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="single-blog-post-two mb-40 wow wow fadeInUp"
                data-wow-delay=".2s"
              ><div className="post-thumbnail">
                  <img
                    src="assets/images/allimg/asset/3.webp"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                   <h4 className="entry-title">
                      <a>Wefal Furniture Factory </a>
                  </h4>
                  <div className="post-meta">
                    <span className="date">
                        <a>Place: Riyad | Area: 10000 SQM
 <br/>
                       Manpower: 150 | Warehouse: 4

</a>
                    </span>
                
                  </div>
                 
                 
                </div>
                
              </div>
            </div> */}



              {/* <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="single-blog-post-two mb-40 wow wow fadeInUp"
                data-wow-delay=".2s"
              ><div className="post-thumbnail">
                  <img
                    src="assets/images/allimg/asset/4.webp"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                   <h4 className="entry-title">
                      <a>Majestic Furniture Factory
</a>
                  </h4>
                  <div className="post-meta">
                    <span className="date">
                        <a>Place: Jeddah | Area: 5000 SQM
 <br/>
                      Manpower: 73 | Warehouse: 2

</a>
                    </span>
                
                  </div>
                 
                 
                </div>
                
              </div>
            </div> */}



              <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======*/}
              <div
                className="single-blog-post-two mb-40 wow wow fadeInUp"
                data-wow-delay=".2s"
              ><div className="post-thumbnail">
                  <img
                    src="assets/images/allimg/asset/5.webp"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                   <h4 className="entry-title">
                      <a>Factory for Steel Furniture
 </a>
                  </h4>
                  {/* <div className="post-meta">
                    <span className="date">
                        <a>Place: Al Shifa Al Badr, Riyadh | Area: 2000 SQM
<br/>
                        Manpower: 40 | Warehouse: 2

</a>
                    </span>
                
                  </div> */}
                 
                 
                </div>
                
              </div>
            </div>



              <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======*/}
              <div
                className="single-blog-post-two mb-40 wow wow fadeInUp"
                data-wow-delay=".2s"
              ><div className="post-thumbnail">
                  <img
                    src="assets/images/allimg/asset/6.webp"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                   <h4 className="entry-title">
                      <a>Matttress Factory</a>
                  </h4>
                  {/* <div className="post-meta">
                    <span className="date">
                        <a>Work: Upholstery Works | SQM: 3000 SQM
<br/>
                       Manpower: 55 | Warehouse: 3

</a>
                    </span>
                
                  </div>
                  */}
                 
                </div>
                
              </div>
            </div>
          
          </div>
        </div>
      </section>
{/* section 8 */}















 {/*====== Start About Section  ======*/}
    
      {/*====== End About Section  ======*/}

      {/*====== Start Features Section ======2222*/}
      {/* <section className="features-section-two p-r z-1">
        <div className="features-wrapper-two main-bg wow fadeInDown">
          <div className="shape shape-one">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-two">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-three">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="features-area pb-30">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-features-item-two mb-40 wow fadeInUp">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Garden Maintenance</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-features-item-two mb-40 wow fadeInDown">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Garden Overhauls</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-features-item-two mb-40 wow fadeInUp">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Landscape Design</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-area">
            <div className="row pt-70">
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-item-two mb-30 wow fadeInDown">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={859} />
                    </h2>
                    <p>Projects Complete</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-item-two mb-30 wow fadeInUp">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={99} />%
                    </h2>
                    <p>Satisfactions Rate</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-item-two mb-30 wow fadeInDown">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={683} />+
                    </h2>
                    <p>Expert Team Member</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-item-two mb-30 wow fadeInUp">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={860} />+
                    </h2>
                    <p>Awards Winning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-box-two wow fadeInRight">
          <h2 className="number">
            <Counter end={25} />
          </h2>
          <h6>Years Of Experience</h6>
          <Link legacyBehavior href="/about">
            <a className="icon-btn">
              <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </section> */}
      {/*====== End Features Section ======222*/}


      {/*====== Start Category Section ======*/}
        {/* <section className="category-section pt-100 pb-60">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-category-item mb-40 wow fadeInLeft">
                  <div className="inner-category">
                    <div className="text">
                      <h3 className="title">Gardening</h3>
                    </div>
                    <div className="icon">
                      <i className="fal fa-long-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-category-item mb-40 wow fadeInUp">
                  <div className="inner-category">
                    <div className="text">
                      <h3 className="title">Landscape</h3>
                    </div>
                    <div className="icon">
                      <i className="fal fa-long-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-category-item mb-40 wow fadeInDown">
                  <div className="inner-category">
                    <div className="text">
                      <h3 className="title">Garden Overhauls</h3>
                    </div>
                    <div className="icon">
                      <i className="fal fa-long-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-category-item mb-40 wow fadeInRight">
                  <div className="inner-category">
                    <div className="text">
                      <h3 className="title">Nature Green</h3>
                    </div>
                    <div className="icon">
                      <i className="fal fa-long-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      {/* <section className="about-section" >
        <div className="container-fluid">
          <div className="about-wrapper gray-bg wow fadeInUp">
            <div className="container">
              <div className="row align-items-xl-center justify-content-center">
  <div className="col-xl-12 col-lg-12">
    <div className="about-two_image-box wow fadeInLeft d-flex justify-content-center">
      <img src="assets/images/allimg/home/Why Choose .webp" alt="Why Choose" style={{width:"100%"}}/>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </section> */}
     


     {/* <section className="about-bg-section">
        <div
          className="about-bg bg_cover wow fadeInLeft"
          style={{ backgroundImage: "url(assets/images/allimg/home/team.webp)" }}
        />
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6">
              <div className="about-two_content-box pb-80 wow fadeInRight">
                <div className="section-title">
                  <div className="section-title mb-10">
                    <span className="sub-title">
                    Eco-Friendly Solutions, Cost-Effective Results..
                    </span>
                    <h2>Our Team</h2>
                  </div>
                  <p className="mb-45 " >
                    Our team combines technical mastery with a mission, to fight waste by extending the life of furniture. With backgrounds in sustainable design, we approach every project with innovation and environmental care. We're communicators, problem-solvers, and perfectionists-here to give you peace of mind and stunning results.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}










      
      {/*====== Start Services Section ======*/}
      {/* <section className="service-section pt-100 pb-20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-100 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  What We Do
                </span>
                <h2>We Care Your Garden &amp; Landscape</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-scissors" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Spring Cleaning</a>
                    </Link>
                  </h4>
                  <p>Sed ut perspiciatis omnisey natus voluptate accusa</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="icon">
                  <i className="flaticon-watering" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Irrigation &amp; Drainage</a>
                    </Link>
                  </h4>
                  <p>Quis autem reprehe volutate esse quam molestiae</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-yard" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Snow &amp; Ice Removal</a>
                    </Link>
                  </h4>
                  <p>We denounce with righteous indignation and dislike</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="icon">
                  <i className="flaticon-growing" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Lawn Fertilization</a>
                    </Link>
                  </h4>
                  <p>To take triviale exam which undertakes laborious</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Services Section ======*/}
      {/*====== Start Project Section ======*/}
      {/* <section className="project-section">
        <div className="container-fluid">
          <Slider
            {...sliderProps.projectsSliderFour}
            className="projects-slider-four wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-1.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">01</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-2.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">02</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-3.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">03</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Cutting Hedge</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-4.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">04</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Plants Greenhouse</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
      {/*====== End Project Section ======*/}
      {/*====== Start Team Section ======*/}
      {/* <section className="team-section pt-95 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Team Member
                </span>
                <h2>Meet Our Expert Gardener</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-team-item-two mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="member-img">
                  <img src="assets/images/team/team-10.jpg" alt="Team Image" />
                  <div className="social-box">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4 className="title">
                    <Link legacyBehavior href="/single-team">
                      <a>Benjamin Hughes</a>
                    </Link>
                  </h4>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-team-item-two mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="member-img">
                  <img src="assets/images/team/team-11.jpg" alt="Team Image" />
                  <div className="social-box">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4 className="title">
                    <Link legacyBehavior href="/single-team">
                      <a>Chester J. Thurman</a>
                    </Link>
                  </h4>
                  <p>Junior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-team-item-two mb-40 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="member-img">
                  <img src="assets/images/team/team-12.jpg" alt="Team Image" />
                  <div className="social-box">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4 className="title">
                    <Link legacyBehavior href="/single-team">
                      <a>Benjamin Hughes</a>
                    </Link>
                  </h4>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="experience-box mt-25 mb-40 text-center wow fadeInUp"
                data-wow-delay=".35s"
              >
                <h2 className="fill-text">25+</h2>
                <h4>Experience Team Member</h4>
                <Link legacyBehavior href="/team">
                  <a className="btn-link">
                    View All Member <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Team Section ======*/}
      {/*====== Start Features Section ======*/}
    


       

      
      {/*====== End Features Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      {/* <section className="testimonial-section">
        <div className="container-fluid">
          <div className="testimonial-quote-area p-r z-1 main-bg">
            <div className="shape shape-one">
              <span>
                <img src="assets/images/shape/leaf-4.png" alt="Leaf" />
              </span>
            </div>
            <div className="quote-wrapper wow fadeInDown">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10 col-lg-12">
                    <div className="client-quote-box">
                      <div className="icon">
                        <i className="fal fa-long-arrow-right" />
                      </div>
                      <div className="text">
                        <h2 className="number">
                          <Counter end={372} />+
                        </h2>
                        <h4>
                          Global Clients Happy to Get Our gardening Services{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-area pt-70 pb-50 pl-15 pr-15 wow fadeInUp">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-1 order-md-1 order-2">
                    <div className="testimonial-dots mb-20" />
                  </div>
                  <div className="col-lg-11 order-md-2 order-1">
                    <Slider
                      {...sliderProps.testimonialSliderThree}
                      className="testimonial-slider-three mb-20"
                    >
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Norman M. Devore</h6>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Douglas D. Hall</h6>
                              <p className="position">Senior Gardener</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Norman M. Devore</h6>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Douglas D. Hall</h6>
                              <p className="position">Senior Gardener</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      {/* <section className="blog-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  News &amp; Blog
                </span>
                <h2>Read Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="single-blog-post-four mb-40 wow fadeInLeft">
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <i className="far fa-calendar-alt" />
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Progressively an Enhanced Accessible Filterable</a>
                    </Link>
                  </h4>
                  <p>Quis autem vel reprehenderit voluptate velit esse quam</p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-15.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-blog-post-four mb-40 wow fadeInRight">
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Build Up Progressively Enhanced Accessible</a>
                    </Link>
                  </h4>
                  <p>Quis autem vel reprehenderit voluptate velit esse quam</p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-16.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default Index;
