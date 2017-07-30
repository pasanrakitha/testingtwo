var React = require('react');
var PropTypes = require('prop-types');
var FontAwesome = require('react-fontawesome');
var Button = require('react-bootstrap').Button;

class TourTile extends React.Component {
  render() {
    var sectionStyle = {
      backgroundImage: 'url(' + this.props.Picture + ')',
    };
    var mailto = 'mailto:premiumwaytravels@gmail.com?subject=Best Value Trip - ' + this.props.Title + ' (' + this.props.SubTitle + ')&body=Hi Premiumway Travels,%0D%0A%0D%0APlease send more details of above tour,%0D%0A%0D%0ABest Regards,'

////  style={sectionStyle}> <img src={this.props.Picture} />
    return (
      <div className='tile' >
        <div className='tileHero' style={sectionStyle}>
          <div className='tileSummary'>
            <span className='tileSummaryBlock'><small className='color-main font_weight_700'>LKR</small> {this.props.Badge1}</span>
            |
            <span className='tileSummaryBlock'><FontAwesome name='calendar-o'  className='color-main'/>  {this.props.Badge2} Days</span>
          </div>
        </div>
        <div className='tileData'>
            <h6>{this.props.SubTitle}</h6>
            <h3>{this.props.Title}</h3>
            <p>{this.props.Description}</p>
            <Button
              className='btn-main btn-outline'
              bsSize="xsmall"
              href={mailto}>
              Details <FontAwesome name='long-arrow-right' />
            </Button>
         </div>
      </div>
    )
  }
}

TourTile.propTypes = {
  Picture: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  SubTitle: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Badge1: PropTypes.number.isRequired,
  Badge2: PropTypes.number.isRequired,
}

module.exports = TourTile;
