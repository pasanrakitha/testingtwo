var React = require('react');
var PropTypes = require('prop-types');


class ContainerHeader extends React.Component {
  render() {
    return (
      <div className='header'>
        <h3 className='tourTileTitle'>{this.props.HeaderText}</h3>
        <small>{this.props.SubHeaderText}</small>
        <div className='line'></div>
      </div>
    )
  }
}

ContainerHeader.propTypes = {
  HeaderText: PropTypes.string.isRequired,
  SubHeaderText: PropTypes.string.isRequired,
}

module.exports = ContainerHeader;
