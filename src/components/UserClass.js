//class component
import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // count: 0,
            userInfo: {
                name: "dummy name",
                location: "default",
                avatar_url:"http://dummy-photo.com"
            },
        };

        // console.log(this.props.name + "child constructor");
    }
    async componentDidMount() {
        // console.log(this.props.name+"child component did mount");
        const data = await fetch("https://api.github.com/users/vedantv3")
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json);

    }
    componentDidUpdate(){
        console.log("component did update");
        
    }
    render() {
        // console.log("child render");
        // const { name, location } = this.props;
        // const { count } = this.state;
        const{name,location,avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h1>Count:{count}</h1> */}
                {/* <button onClick={
                    () => {
                        //never update state variables directly
                        // this.setState({
                        //     count: this.state.count + 1,
                        // })
                    }
                }>Count Increase</button> */}
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: @akshay</h2>
            </div>
        );
    }
}

export default UserClass;
