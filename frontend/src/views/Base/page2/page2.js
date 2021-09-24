import React, { Component } from "react";
import axios from 'axios';

class edit extends Component {
  constructor(props) {
    super(props);

    this.onChangeSkill = this.onChangeSkill.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      Name: '',
      Priority: ''
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

onChangeSkill(e) {
    this.setState({
      Name: e.target.value
    });
}

onChangePriority(e) {
  this.setState({
    Priority: e.target.value
  });
}

onSubmit(e) {
    e.preventDefault();

    const obj = {
      Name: this.state.Name,
      Priority: this.state.Priority
    };
    /*const dataObj={
      Skills:obj
    };*/

    axios.post('http://localhost:4000/skill/add', obj)
        .then(res => console.log(res.data));

        this.setState({
          Name: '',
          Priority: ''
      })
}

  render() {
    return <div className="animated fadeIn">
      <div>
                <h3>Add Skill for the university </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Skill name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Name}
                                onChange={this.onChangeSkill}
                                />
                    </div>
                    <div className="form-group">
                        <label>Priority: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Priority}
                                onChange={this.onChangePriority}
                                />
                    </div>
                        <div className="form-group">
                            <input type="submit" value="Add Skill" className="btn btn-primary" />
                        </div>
                </form>
            </div>
    </div>;
  }
}

export default edit;