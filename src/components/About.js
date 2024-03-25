import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("parent constrcutor");
    }
    componentDidMount() { //component did mount is used to make API calls and The componentDidMount() method is called after the component is rendered.
        // console.log("parent component did mount");

    }
    render() {
        // console.log("parent render");
        return (
            <div>
                <h1>About Class component</h1>
                <h1>This is namaste react web series</h1>
                <UserClass name={"First"} location={"Deharadun class"} />
                {/* <UserClass name={"Second"} location={"USA"} /> */}
            </div>

        );
    }
}

export default About;

/* wrong sequence 
-parent constructor
-parent render
  -first constructor
  -first render
  -first componentDidAmount

  -second constructor
  -second render
  -second componentdidMount

-parent componentdidMount


correct sequence 
-parent constructor
-parent render
  -first constructor
  -first render
  -second constructor
  -second render
  -first componentDidAmount
  -second componentdidMount

-parent componentdidMount

  */