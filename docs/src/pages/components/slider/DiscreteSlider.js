import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default class DiscreteSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false
    }
  }

  render() {

    return (
      <div >
        <Typography id="discrete-slider" gutterBottom>
          Temperature
      </Typography>
        <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          onChange={() => this.setState({ isDisabled: true })}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          disabled={this.state.isDisabled}
        />
        <Typography id="discrete-slider" gutterBottom>
          Disabled
      </Typography>
        <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          disabled
        />
      </div>
    );
  }
}
