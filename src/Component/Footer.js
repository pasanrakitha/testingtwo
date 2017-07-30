var React = require('react');
var PropTypes = require('prop-types');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var SocialMedia = require('./SocialMedia');

class Footer extends React.Component {
  render() {
    var socials = this.props.Data.Socails;
    var year = new Date().getFullYear();

    return (
      <Grid className='footer'>
        <Row>
          <Col md={4} mdOffset={0} lg={4} lgOffset={0} className='aboutus'>
            <h3>About Us</h3>
            <p>Airline Tickets, Reviews and advices on hotels, Outbound travel packages, Hotel reservations, Visa assistances and lots more.</p>
            <small>T&C APPLY!</small>
          </Col>
          <Col md={4} mdOffset={0} lg={4} lgOffset={0} className='contactus' >
            <h3>Contact Us!</h3>
            <span className='highText'>+94 – 716 110 001</span>
            <span className='small'>24/7 Dedicated Customer Support</span>
            <a className='color_white' href='mailto:premiumwaytravels@gmail.com?subject=Premiumway Travels - Contact Us'>mail us</a>
          </Col>
          <Col md={4} mdOffset={0} lg={4} lgOffset={0} className='newsletter' >
            <h3>Stay Connected</h3>
            <div className='connected'>
                {socials.map((social) => {
                  return (
                    <div key={social.Name}>
                      <SocialMedia
                        Icon={social.Icon}
                        Name={social.Name}
                        ClassName={social.ClassName}
                        Link={social.Link} />
                    </div>
                  )
                })}
                <div className='clear'></div>
            </div>
          </Col>
        </Row>
        <Row className='copyright'>
          <div className='line background-dark'></div>
          <h6>
          Copyright © {year} - <span className='font_weight_600'>Premiumway Travels</span> - All Rights Reserved.
          </h6>
        </Row>
      </Grid>
    )
  }
}

Footer.propTypes = {
  Data: PropTypes.object.isRequired,
}

module.exports = Footer;
