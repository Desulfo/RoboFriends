import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox'

class App extends Component {
    constructor(){
        super();
        this.state={
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});
        
    }

    render(){
        const filtredRobots= this.state.robots.filter( robot => 
            robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));

        return (
            <>
                <header className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                </header>
                <CardList robots={filtredRobots} />
            </>
        )
    }
}
export default App;