import React from 'react';

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
      toDo = toDoList
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    )
  }
}

export default App;
