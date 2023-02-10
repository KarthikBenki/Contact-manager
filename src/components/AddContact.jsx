import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"",email:""})
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add contact</h2>
        <form action="" className="ui form">
          <div className="field">
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) =>
                this.setState({ ...this.state, name: e.target.value })
              }
              required
            />
          </div>
          <div className="field">
            <label htmlFor="">Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={(e) =>
                this.setState({ ...this.state, email: e.target.value })
              }
              required
            />
          </div>
          <button className="ui button blue" onClick={this.add}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
