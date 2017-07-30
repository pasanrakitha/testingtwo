var React = require('react');
var PropTypes = require('prop-types');

class TopTile extends React.Component {
  render() {
    var sectionStyle = {
      backgroundImage: 'url(' + this.props.Picture + ')',
    };

    return (
      <div className='toptile' >
        <div className='toptileHero' style={sectionStyle}>
          <div className='toptileSummary'>
            {this.props.SubTitle === ''
              ? this.props.Title
              :this.props.Title + ', ' }
              {this.props.SubTitle}
          </div>
        </div>
      </div>
    )
  }
}

TopTile.propTypes = {
  Picture: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  SubTitle: PropTypes.string.isRequired,
}

module.exports = TopTile;
