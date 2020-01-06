import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});
        
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json())
            .then(users => this.setState({robots: users}));
    }
    render(){
        const filtredRobots= this.state.robots.filter( robot => 
            robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        if (this.state.robots.length ===0){
            return <h1 className='tc ma4'>LOADING</h1>
        }else {
            return (
                <>
                    <header className='tc'>
                        <h1 className='f1 ma4 '>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                    </header>
                    <Scroll>
                        <CardList robots={filtredRobots} />
                    </Scroll>
                </>)
        }
    }
}
export default App;