import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-field/search-field.component'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchValue: ''
    }
  }

  async componentDidMount() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await response.json()
    this.setState({monsters: users})
  }

  handleChange = e => this.setState({searchValue: e.target.value})
  
  render() {
    const {monsters, searchValue} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeHolder= 'search monsters' handleChange= {this.handleChange}/>
        <CardList monsters= {filteredMonsters} />
      </div>
    )
  }
}

export default App;
