import React from "react";
import { Link } from "react-router-dom";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main">
        <h2>Edit contact</h2>
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
          <button className="ui button blue" onClick={this.update}>
            Update contact
          </button>
          <Link to="/">
            <button className="ui button green">Contact List</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditContact;
