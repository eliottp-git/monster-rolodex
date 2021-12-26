import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => 
        this.setState({ monsters: users })
        );
  }

  render(){
    const { monsters, searchField } = this.state;
    // this is the same as writing const monster = this.state.monster AND const searchField = this.state.searchField
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );
    // console.log(filteredMonsters);
    return (
      <div className="App">
        {/* the this.state.monsters.map function only returns a list of h1's with names
        the CardList Component that we created passes those h1's as props children into divs with a
        className of card-list which contains our css. That's why our h1's are all
        in grids now */}
  
        {/* as soon as we pass our state (line 8) into a Component, this Component receives it as a Props*/}
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder = 'type monster name'
          handleChange = {e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters = {filteredMonsters} />

      </div>
    )
  }
}



// OLD CODE USING A FUNCTION INSTEAD OF A CLASS
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           This is my first <code>React.app</code> website!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
