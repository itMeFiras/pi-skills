import React, { Component } from "react";
import axios from 'axios';

class add extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeAdress = this.onChangeAdress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      Name: '',
      Lastname: '',
      Adress: '',
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

  onChangeName(e) {
    this.setState({
        Name: e.target.value
    });
}

onChangeLastname(e) {
    this.setState({
        Lastname: e.target.value
    });
}

onChangeAdress(e) {
    this.setState({
        Adress: e.target.value
    });
}

onSubmit(e) {
    e.preventDefault();
    
    const newTodo = {
        Name: this.state.Name,
        Lastname: this.state.Lastname,
        Adress: this.state.Adress,
    }

    axios.post('http://localhost:4000/todos/add', newTodo)
        .then(res => console.log(res.data));

    this.setState({
        Name: '',
        Lastname: '',
        Adress: '',
    })
}

  render() {    
    return <div className="animated fadeIn">
      <div style={{marginTop: 20}}>
                <h3>Add New Teacher</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label><b>Name: </b></label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Name}
                                onChange={this.onChangeName}
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label><b>Lastname: </b></label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Lastname}
                                onChange={this.onChangeLastname}
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label><b>Department:</b></label>
                        <br></br>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="1"
                                    value="Informatique"
                                    onChange={this.onChangeAdress}
                                    />
                            <label className="form-check-label">Informatique</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="2"
                                    value="Telecommunication"
                                    onChange={this.onChangeAdress}
                                    />
                            <label className="form-check-label">Telecommunication</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="3"
                                    value="Electromecanique"
                                    onChange={this.onChangeAdress}
                                    />
                            <label className="form-check-label">Electromecanique</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="4"
                                    value="Genie Civil"
                                    onChange={this.onChangeAdress}
                                    />
                            <label className="form-check-label">Genie Civil</label>
                        </div>
                    
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Teacher" className="btn btn-primary" />
                    </div>
                </form>
            </div>
    </div>;
  }
}

export default add;
