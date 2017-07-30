var React = require('react');
var PropTypes = require('prop-types');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var TourTile = require('./TourTile');
var ContainerHeader = require('./ContainerHeader');

class TourTileContainer extends React.Component {
  render() {
    var tours = this.props.Tours;
    return (
      <Grid className='container_wrap'>
        <ContainerHeader
          HeaderText='Best Value Trips'
          SubHeaderText='Check out our best promotion tours'/>
        <Row>
          {tours.map((tour) => {
            return (
              <Col sm={6} md={4} lg={3} key={tour.Title}>
                <TourTile
                  Title={tour.Title}
                  SubTitle={tour.SubTitle}
                  Picture={tour.Picture}
                  Description={tour.Description}
                  Badge1={tour.Badge1}
                  Badge2={tour.Badge2}  />
              </Col>
            )
          })}
        </Row>
      </Grid>
    )
  }
}

TourTileContainer.propTypes = {
  Tours: PropTypes.array.isRequired
}

module.exports = TourTileContainer;
