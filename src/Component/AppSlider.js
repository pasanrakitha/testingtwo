var React = require('react');
var PropTypes = require('prop-types');
var Carousel = require('react-responsive-carousel').Carousel;

class AppSlider extends React.Component {
  render() {
    var sliders = this.props.Sliders;
		return (
			<Carousel axis="horizontal" interval={6000}  showStatus={false} showThumbs={false} showArrows={false} transitionTime={1000} emulateTouch infiniteLoop autoPlay>
					{sliders.map((slider) => {
						return (
							<div key={slider.image}>
					        <img src={slider.image} alt='slider' />
					    </div>
						)
					})}
			</Carousel>
    );
  }
}

AppSlider.propTypes = {
  Sliders: PropTypes.array.isRequired
}

module.exports = AppSlider;
