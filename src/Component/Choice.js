var React = require('react');
var PropTypes = require('prop-types');
var FontAwesome = require('react-fontawesome');

class Choice extends React.Component {
  render() {
    return (
      <div className='choice' >
        <div className='choiceicon' >
          <FontAwesome
            name={this.props.Icon}
            size='5x' />
        </div>
        <div className='choicedata' >
          <h4>{this.props.Choice}</h4>
          <p>{this.props.Description}</p>
        </div>
        <div className='clear'></div>
      </div>
    )
  }
}

Choice.propTypes = {
  Icon: PropTypes.string.isRequired,
  Choice: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
}

module.exports = Choice;
