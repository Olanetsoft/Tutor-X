/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.scss"

const getScrollNode = (element) => {
  return element.ownerDocument.scrollingElement || element.ownerDocument.documentElement
}

const isScrolled = (element) => {
  const scrollNode = getScrollNode(element)
  return scrollNode.scrollTop > 0
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.siteContainer = React.createRef()
    this.state = {
      scrolled: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  render() {
    let className = "site-container"
    if (this.props.className) className += ` ${this.props.className}`
    if (this.state.scrolled) className += " navbar-scrolled"

    var d = new Date();
    var n = d.getFullYear();
    return (
      <div
        className={className}
        ref={this.siteContainer}
        id="page-top">
        <Header />
        <main>{this.props.children}</main>
        <footer className="bg-dark p-2">
          <div class="row">

            <div className="col-md-12  text-center">
              <div className="mb-4 flex-center">


                <a className="fb-ic" href="https://twitter.com/tutorXApp">
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3">facebook </i>
                  </a>

                <a className="tw-ic" href="https://twitter.com/tutorXApp">
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3"> twitter </i>
                 </a>

                {/* <a className="gplus-ic" href="https://twitter.com/tutorXApp">
                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a> */}

                {/* <a className="li-ic" href="https://twitter.com/tutorXApp">
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">  linkedin </i>
                 </a> */}

                <a className="ins-ic" href="https://instagram.com/official_tutorX">
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3"> instagram </i>
                 </a>

                {/* <a className="pin-ic" href="https://twitter.com/tutorXApp">
                  <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                </a> */}
              </div>
            </div>


          </div>
          <div className="container">



            <div className="small text-center text-muted">Copyright &copy; {n} - Tutor-X &nbsp;&nbsp;&nbsp;&nbsp;<span>Built by <a href="https://twitter.com/olanetsoft"
              target="_blank" rel="noopener noreferrer">olanetsoft</a></span></div>
          </div>
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}