import { Component } from "react";
import { User } from "./User";
import UserClass from "./UserClass";
import {
  CORS_API_KEY,
  CORS_PROXY_URL,
  GIT_HUB_USER_INFO_API,
} from "../utils/constants";

class AboutClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    console.log("Parent Constructor");
  }

  async componentDidMount() {
    console.log("Parent componentDidMount");
    const data = await fetch(CORS_PROXY_URL + GIT_HUB_USER_INFO_API, {
      headers: {
        "x-cors-api-key": CORS_API_KEY,
      },
    }).catch((error) => {
      console.log("error:", error);
    });

    // this.timer = setInterval(() => {
    //   console.log("setInterval...");
    // }, 1000);

    if (!data) {
      this.setState({
        userInfo: {
          name: "Sukumar Reddy",
        },
      });
      return;
    }
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
    console.log("jsonData", jsonData);
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Parent componentWillUnmount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h4>This is about us page</h4>
        <h1>Name: {this.state.userInfo.name}</h1>
        <User />
        <UserClass name="First: Sukumar" location="Bangalore" />
        {/* <UserClass name="Second: Sukumar" location="Bangalore" /> */}
      </div>
    );
  }
}

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h4>This is about us page</h4>
      {/* <User />
      <UserClass name="Sukumar Reddy" location="Bangalore" /> */}
    </div>
  );
};

export default AboutClass;
