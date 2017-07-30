var React = require('react');
var PropTypes = require('prop-types');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var TopTile = require('./TopTile');
var ContainerHeader = require('./ContainerHeader');

class TopTileContainer extends React.Component {
  render() {
    var tops = this.props.Tops;
    return (
      <Grid className='container_wrap'>
        <ContainerHeader
          HeaderText='Top Destinations'
          SubHeaderText='World`s best tourist destinations'/>
        <Row>
          {tops.map((top) => {
            return (
              <Col sm={8} smOffset={2} md={6} mdOffset={0} lg={6} lgOffset={0} key={top.Title}>
                <TopTile
                  Title={top.Title}
                  SubTitle={top.SubTitle}
                  Picture={top.Picture}  />
              </Col>
            )
          })}
        </Row>
      </Grid>
    )
  }
}

TopTileContainer.propTypes = {
  Tops: PropTypes.array.isRequired
}

module.exports = TopTileContainer;
