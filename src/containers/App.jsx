import React from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }
 
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if(this.state.robots.length === 0){
        return <h1 className="text-center">Loading...</h1>
    }
    else
    {
        return (
        <div>
            <div className=" text-center p-5">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            </div>
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
           
        </div>
        );
    }   
  }
}
export default App;
