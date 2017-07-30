var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
class Navigation extends React.Component {
  render() {

    return (
      <Navbar className='nav_theme' fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand className='nav_theme_icon' >
            <a>
              <img alt='Brand' src='./images/Premium way log.png' height='50' width='50' />
            </a>
            </Navbar.Brand>
          <Navbar.Brand className='nav_theme_brand'>
            <a href="">
              Premiumway Travels
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#Top">Home</NavItem>
            <NavItem eventKey={2} href="#TopTileBar">Top Destinations</NavItem>
            <NavItem eventKey={3} href="#ChooseUsBar">Why Choose Us</NavItem>
            <NavItem eventKey={4} href="#TourTileBar">Best Value Trips</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

Navigation.propTypes = {
}

module.exports = Navigation;
