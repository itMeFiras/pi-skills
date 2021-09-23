import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <tr>
      <td>{props.todo.Start}</td>
      <td>{props.todo.End}</td>
      <td>{props.todo.Subject}</td>
      <td>{props.todo._id}</td>
  </tr>
)

const Data = props => (
  { start_date : props.todo.Start,
    end_date: props.todo.End,
    text: props.todo.Subject }
)

const teeest = [
  { start_date:'2020-04-20 10:30	', end_date:'2020-04-20 11:30', text:'jee' },
  { start_date:'2020-04-22 10:00', end_date:'2020-04-22 18:00', text:'Event 2' }
];

class train extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      todos: [],
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => {
      return { fadeIn: !prevState };
    });
  }

  componentDidMount() {
    axios.get('http://localhost:4000/train/')
        .then(response => {
            this.setState({todos: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
}

componentDidUpdate() {
    axios.get('http://localhost:4000/train/')
    .then(response => {
        this.setState({todos: response.data});
        
    })
    .catch(function (error) {
        console.log(error);
    })   
}

delete(id) {
  axios.delete('http://localhost:4000/Train/delete/'+id)
      .then((res) => {
          console.log('Successfully deleted!')
      }).catch((error) => {
          console.log(error)
      });
  this.setState({
    todos : this.state.todos.filter(el => el.id !== id)
  })
}

  render() {
    return <div className="animated fadeIn">
        <link href="http://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
      <h2 style={{ color: "blue" }}>Training Scheduler</h2>
      <div></div>
      <Link to={"/train/add"}>Add a Training Session</Link><br></br>
      <Link to={"/train/Sc"}>See the List on Scheduler</Link>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Subject</th>
            <th>TrainerName</th>
            <th>Start</th>
            <th>End</th>                           
          </tr>
        </thead>
        <tbody>

          {this.state.todos.map(( listValue, index ) => {
            return (
              <tr key={index} >
                
                <td>{listValue.Subject}</td>
                <td>{listValue.TrainerName}</td>
                <td>{listValue.Start}</td>
                <td>{listValue.End}</td>
              </tr>
            );
          })}
        
        </tbody>
      </table>

    </div>;
  }
}

export default train;
