import React from "react";
import TextTransition,{presets} from "react-text-transition";

const TEXTS = ["The Weather made,", "Easy,", "Fast,","Reliable", "Just for You!!","React to the Weather"];

class Greeting extends React.Component {
  state = { num: 0 };
  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval(
      () =>
        this.state.num < TEXTS.length -1
          ? this.setState({ num: this.state.num + 1 })
          : clearInterval(),
      1500
    );
  }
  componentWillUnmount (){
     clearInterval(this.intervalID);
  }
  render() {
    const styleobj = {
      fontFamily: " Arial, Helvetica, sans-serif",
      opactiy:"50",
    };
    return (        
        <div className="row col-12 m-auto ">
            
            <h1><TextTransition
            style={styleobj}
            text={TEXTS[this.state.num]}
            springConfig={presets.slow}
          /></h1>
          
        </div>      
    );
  }
}

export default Greeting;
