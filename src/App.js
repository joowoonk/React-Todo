import React from 'react';
import TodoList from './components/TodoList'

const toDoList = [
  {
    what: "Code 2 hours besides school",
    id: 1,
    finished: false
  },
  {
    what: "Eat two eggs one sausage for",
    id: 2,
    finished: false
  },
  {
    what: "Steak",
    id: 3,
    finished: false
  },
  {
    what: "Fruits with heavy cream",
    id: 4,
    finished: false
  },
  {
    what: "Work Out",
    id: 5,
    finished: false
  },
  {
    what: "Finish Project",
    id: 6,
    finished: false
  },
  {
    what: "REST",
    id: 7,
    finished: false
  }
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      toDo : toDoList
    }
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newToDo ={
      what: item,
      id: Date.now(),
      finished: false
    };
    this.setState({
      toDo : [...this.state.toDoList, newToDo]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);
    // map over array
    //when we find the item we clicked, toggle the finished field
    // otherwise return the item untouched
    this.setState({
      toDo: this.state.toDoList.map(item=> {
        if (itemId === item.id){
          return {
            ...item,
            finished: !item.finished
          }
        }
        return item;
      })
    });
  };

  clearFinished = e => {
    e.preventDefault();
    this.setState({
      toDo: this.state.toDoList.filter(item => !item.finished)
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
       <div className="header">
         <h1>To-Do List</h1>
         <TodoList 
           toDoList={this.state.toDo}
           toggleItem={this.toggleItem}
           clearFinished={this.clearFinished}
         />
       </div>
        
      </div>
    )
  }
}

export default App;
