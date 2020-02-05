import React from 'react';

import { CardList} from "./components/card-list/card-list.component";

import { SearchBox} from "./components/search-box/search-box.component";

import './App.css';

//
class App extends React.Component {
  constructor() {
    // super() calls React Component's constructor
    super();

    this.state ={
      monsters: [],
      searchField: ''
    };

  }

  // This is a lifecycle method
  // React puts our component for the first time on the page
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        // take a response and convert it to json format
        .then(response => response.json())
        // set monsters to a desired objects name called users with setState
        .then(users => this.setState({monsters: users}))


  }

  // arrow functions automatically binds this to the where the arrow function is defined
  // when js first created app component it also defined all the methods including this arrow function
  // and because of this when this function came to existence to js it also binds this keyword to this context
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // deconstructing
    // equals to const monsters = this.state.monsters and searchField but easier
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox
              placeholder='search monsters'
              handleChange={ this.handleChange }
          />
          <CardList monsters={ filteredMonsters } />

        </div>
    );
  }
}

export default App;
