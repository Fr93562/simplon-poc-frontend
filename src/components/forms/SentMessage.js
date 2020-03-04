import React from 'react';

export class SentMessage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', operation: 'send'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Le nom a été soumis : ' + this.state.value + ' ' + this.state.operation);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="formSent" onSubmit={this.handleSubmit}>
            <input className="formArea" type="textArea" value={this.state.value} onChange={this.handleChange} />
          <input className="formButton" type="submit" value="Envoyer" />
        </form>
      );
    }
  }

  export default SentMessage;