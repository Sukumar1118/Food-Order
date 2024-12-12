import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.name, "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name, "Child componentDidMount");
  }

  render() {
    console.log(this.props.name, "Child Render");
    const { name, location } = this.props;
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            //Never update state variables directly. Ex: this.state.count = 2.
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: sukumar1118@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
