import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

//Import all icon
import ArtImg from "../images/art/art.png"
import AdminImg from "../images/art/admin.png"
import AgricImg from "../images/art/agric.png"
import BioImg from "../images/art/bio.png"
import DentImg from "../images/art/dentistry.png"
import DevImg from "../images/art/dev.png"
import EduImg from "../images/art/edu.png"
import EngrImg from "../images/art/env.png"
import EnvImg from "../images/art/engr.png"
import HealthImg from "../images/art/health.png"
import LawImg from "../images/art/law.png"
import MedImg from "../images/art/med.png"
import PharmaImg from "../images/art/pharma.png"
import PhyImg from "../images/art/physical.png"
import SoilImg from "../images/art/soil.png"
import VEtImg from "../images/art/vet.png"



export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">We've got what you need!</h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">Lorem ipsum dolor sit amet, consectetur 
                dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e
                x ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit es
                se cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id est laborum.
                  attached!</p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services"
                  onClick={Scroller.handleAnchorScroll}>Get Started!</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section py-5" id="services">
          <div className="container">
            <h2 className="text-center">Academy</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-gem text-primary mb-4"></i> */}
                  <img src={ArtImg} alt="art"/>
                  <h3 className="h4 mb-2">Arts</h3>
                  <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i> */}
                  <img src={AgricImg} alt="agric"/>
                  <h3 className="h4 mb-2">Agricultural Sciences</h3>
                  <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-globe text-primary mb-4"></i> */}
                  <img src={AdminImg} alt="admin"/>
                  <h3 className="h4 mb-2">Administration & Management</h3>
                  <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={BioImg} alt="bio"/>
                  <h3 className="h4 mb-2">Biological Sciences</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={DentImg} alt="dent"/>
                  <h3 className="h4 mb-2">Dentistry</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={DevImg} alt="dev"/>
                  <h3 className="h4 mb-2">Developers</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={EduImg} alt="edu"/>
                  <h3 className="h4 mb-2">Education Courses</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={EngrImg} alt="engr"/>
                  <h3 className="h4 mb-2">Engineering Courses</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={EnvImg} alt="env"/>
                  <h3 className="h4 mb-2">Environmental Services</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={LawImg} alt="law"/>
                  <h3 className="h4 mb-2">Law</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={MedImg} alt="med"/>
                  <h3 className="h4 mb-2">Medical Sciences</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={HealthImg} alt="health"/>
                  <h3 className="h4 mb-2">Health Science & Technology</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={PharmaImg} alt="pharma"/>
                  <h3 className="h4 mb-2">Pharmaceutical Sciences</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={PhyImg} alt="physical"/>
                  <h3 className="h4 mb-2">Physical Sciences</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={SoilImg} alt="soil"/>
                  <h3 className="h4 mb-2">Soil Sciences</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <img src={VEtImg} alt="vet"/>
                  <h3 className="h4 mb-2">Veterinary Medicine</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpeg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpeg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpeg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="images/portfolio/fullsize/4.jpeg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpeg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpeg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/7.jpeg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[6].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/8.jpeg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[7].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/9.jpeg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[8].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/10.jpeg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[9].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/11.jpeg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[10].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/12.jpeg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[11].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">
                      Click to View
                    </div>
                    {/* <div className="project-name">
                      Project Name
                    </div> */}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section text-white p-4" style={{backgroundColor: "#8FBF4D"}}>
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start!</h2>
            <a className="btn btn-light btn-xl" href="https://play.google.com/store/apps/details?id=tutor.x">Download Now!</a>
          </div>
        </section>

        <section className="page-section p-5" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">Ready to know more about the platform? Give us a call or send us an
                email
                  and we will get back to you as soon as possible!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+2348143166543</div>
              </div>
              <div className="col-sm-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto: ugeorge78@gmail.com"> info.tutorX@gmail.com </a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent} />
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpeg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
