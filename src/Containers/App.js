import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import '../styles/App.css';

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
        const {robots, searchfield} = this.state;

        const filtredRobots= robots.filter( robot => 
            robot.name.toLowerCase().includes(searchfield.toLowerCase()));
        
            return !robots.length ? 
            <h1 className='tc ma4'>LOADING</h1> :
            (<>
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
export default App;