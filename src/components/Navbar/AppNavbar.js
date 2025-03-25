import React, { useEffect, useState } from 'react'
import './AppNavbar.css'
import { Container ,Col,Row ,Navbar ,NavDropdown ,Nav ,Offcanvas} from 'react-bootstrap'
import logoLight from './../../images/logo-light-min.jpg'
import logoDark from './../../images/logo-min.jpg'
import { Link } from 'react-router-dom'
export default function AppNavbar() {
  const[isScrolled,setisScrolled]=useState(false)
  const [dropdownOpen,setdropdownOpen]=useState(null)
  useEffect(() =>{
    const handleScroll =()=>{
      setisScrolled(window.scrollY >= 50)
    }
    window.addEventListener('scroll' ,handleScroll)
    return () =>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  const handleDropdownOpen =(dropdown)=>{
    setdropdownOpen(dropdown)
  }
  const handleDropdownClose =() =>{
      setdropdownOpen(null)    
  }
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>      
    <Container fluid id="containerNavbar"  className={isScrolled ? 'navbar-scrolled':''}>
    <Row >
      <Col id="NavbarCol" >
        <Navbar  expand="lg" bg="light" data-bs-theme="light" id='AppNavbar' >
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
            <img alt="" src={isScrolled ? logoDark : logoLight} id="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end">
              <Offcanvas.Body>
                <Nav className="mx-auto">
                  <Nav.Link as={Link} to="/" style={{color:'red'}}>Home</Nav.Link>
                  <NavDropdown className="dropdown-hover" title="Services" id="offcanvasNavbarDropdown-expand-lg"
                  show={dropdownOpen === 'services'}
                  onMouseEnter={()=>handleDropdownOpen('services')}
                  onMouseLeave={handleDropdownClose}>
                    <Link to="/ocean-freight-forwarding" className="dropdown-item">Ocean Freight Forwarding</Link>
                  </NavDropdown>
                  <NavDropdown className="dropdown-hover" title="Pages" id="offcanvasNavbarDropdown-expand-lg"
                                    show={dropdownOpen === 'Pages'}
                  onMouseEnter={()=>handleDropdownOpen('Pages')}
                  onMouseLeave={handleDropdownClose}>
                    <Link to="/our-prices" className="dropdown-item">Our Prices</Link>
                    <Link to="/testimonials" className="dropdown-item">Testimonials</Link>
                  </NavDropdown>
                  <NavDropdown className="dropdown-hover" title="Gallery" id="offcanvasNavbarDropdown-expand-lg"

                                    show={dropdownOpen === 'Gallery'}
                  onMouseEnter={()=>handleDropdownOpen('Gallery')}
                  onMouseLeave={handleDropdownClose}>
                    <Link to="/gallery-Single" className="dropdown-item">Gallery Single</Link>
                    <Link to="/gallery-four-columns" className="dropdown-item">Gallery Four Columns</Link>
                  </NavDropdown>
                  <NavDropdown className="dropdown-hover" title="Features" id="offcanvasNavbarDropdown-expand-lg"
                                    show={dropdownOpen === 'Features'}
                  onMouseEnter={()=>handleDropdownOpen('Features')}
                  onMouseLeave={handleDropdownClose}>
                    <Link to="/request-a-quote" className="dropdown-item">Request A Quote</Link>
                   </NavDropdown>
                  <NavDropdown className="dropdown-hover" title="News" id="offcanvasNavbarDropdown-expand-lg"
                                    show={dropdownOpen === 'News'}
                  onMouseEnter={()=>handleDropdownOpen('News')}
                  onMouseLeave={handleDropdownClose}>
                    <Link to="/blog-two-columns" className="dropdown-item">Blog Two Columns</Link>
                  </NavDropdown>
                  <Link to="/contact" id='contactLink'>Contact</Link>
                  <Link to="/request-a-quote" className="btn" id='AppNavbar-Btn'>Get a Quote</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Col>
    </Row>
    {showScroll && (
  <button 
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id='scroll-to-top-btn'>^</button>)}
  </Container>
  </>
)
}

