import { useEffect } from "react";
import React, {useState} from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";

function  App(){
  
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
  
    function onSearchChange(event) {
      setSearchfield(event.target.value);
  };
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []); 
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if(robots.length === 0){
        return <h1 className="text-center">Loading...</h1>
    }
    else
    {
        return (
        <>
            <div className=" text-center p-5">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            </div>
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
           
        </>
        );
    }   
  
};
export default App;
