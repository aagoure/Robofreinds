import React,{Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {setSearchfield} from '../Actions'

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots:[],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>{return response.json()})
			.then(users =>{this.setState({robots: users})});
	}

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
	}

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.lenght ?
		(
			<div className='tc'>
				<h1>RoboFreinds</h1>
				<SearchBox  searchChange= {this.onSearchChange} />
	            <CardList   robots= {filteredRobots} />
	        </div>
		) :
			<h1>Loading</h1>
		

	}

		
	}


export default connect(mapStateToProps, mapDispatchToProps)(App);