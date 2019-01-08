import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [
      { id:  1, name: "Sumit", age: "32" },
      { id:  2, name: "Pooja", age: "30" },
      { id:  3, name: "Vachi", age: "28" }
    ],
    showPerson: false
  };

  changeNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: "32" },
        { name: "Pooja", age: "30" },
        { name: "Vachi", age: "26" }]
    })
  }

  inputChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  };

  deletePersonHandler = (personIndex) => {
    //Immutateable State
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    console.log("State : ", this.state.persons);
    console.log("Persons : ", persons);
    this.setState({ persons: persons })
  }

  render() {
    const style = {
      backgroundColor: "white",
      border: "1px blue solid",
      padding: "5px",
      margin: "auto",
      cursor: "pointer"
    }

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                key={index}
                click={this.deletePersonHandler.bind(this, index)}
                change={(event) => { this.inputChangeHandler(event, person.id) }}
              />
            })
          }
          {/* <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              change={this.inputChangeHandler} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={() => this.changeNameHandler("Ankit")} />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} /> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h2>Hi, I'm a React App</h2>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    // return React.createElement("div", {className : 'App'}, React.createElement("h1", null, "Does this works?"))
  }
}

export default App;
