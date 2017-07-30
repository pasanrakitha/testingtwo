var React = require('react');
var PropTypes = require('prop-types');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Choice = require('./Choice');
var ContainerHeader = require('./ContainerHeader');

class ChooseUsContainer extends React.Component {
  render() {
    var choices = this.props.Choices;
    return (
      <Grid >
        <ContainerHeader
          HeaderText='Why Choose Us'
          SubHeaderText='Here are reasons you should plan trip with us'/>
        <Row>
          {choices.map((choice) => {
            return (
              <Col sm={8} smOffset={2} md={6} mdOffset={0} lg={6} lgOffset={0} key={choice.Choice}>
                <Choice
                  Icon={choice.Icon}
                  Choice={choice.Choice}
                  Description={choice.Description}  />
              </Col>
            )
          })}
        </Row>
      </Grid>
    )
  }
}

ChooseUsContainer.propTypes = {
  Choices: PropTypes.array.isRequired
}

module.exports = ChooseUsContainer;
