import React from "react";
import CreateNote from "./CreateNote";
import NotesList from "./NotesList";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false,
      updatedNote: null,
    };
    this.makeUpdate = this.makeUpdate.bind(this);
  }

  makeUpdate(note, condition) {
    this.setState({
      isUpdate: condition,
      updatedNote: note,
    });
  }
  render() {
    return (
      <div className="container my-3">
        <div className="row">
          <CreateNote {...this.state} makeUpdate={this.makeUpdate}/>
        </div>
        <NotesList {...this.state} makeUpdate={this.makeUpdate}/>
      </div>
    );
  }
}

export default Container;
