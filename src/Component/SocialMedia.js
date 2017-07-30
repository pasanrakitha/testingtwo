var React = require('react');
var PropTypes = require('prop-types');
var FontAwesome = require('react-fontawesome');

class SocialMedia extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(link){
     window.open(link, '_blank');
  }

  render() {
    var link = this.props.Link;

    return (
      <div
        className={this.props.ClassName + ' social'}
        onClick={this.handleClick.bind(null, link)} >
          <FontAwesome
            name={this.props.Icon} />
      </div>
    )
  }
}

SocialMedia.propTypes = {
  Icon: PropTypes.string.isRequired,
  ClassName: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Link: PropTypes.string.isRequired,
}

module.exports = SocialMedia;
