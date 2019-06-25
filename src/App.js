import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: '',
      messages: [],
      solved: false,
      inputError: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { input, messages, solved, inputError } = this.state;

    input = input.toLocaleLowerCase();

    if (input === 'sean') {
      messages.unshift('Close');
      inputError = false;
    } else if (input === 'alli') {
      solved = true;
      inputError = false;
    } else {
      inputError = true;
    }

    this.setState({ messages, solved, inputError });
  }

  onChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    const { input, messages, solved, inputError } = this.state;
    return (
      <div className="App uk-light">
        <header className="App-header">
          <h1 className="uk-margin-top">MSIG Puzzle</h1>
        </header>
        <div className="uk-card card uk-align-center">
          <div className="uk-margin-left uk-margin-right">
            <p>Hello! This is the page to submit answers to the puzzle we submitted as a part of our application to the Microsoft Intern Game.</p>
            <p>If you don't know what this page is, you probably shouldn't be here.</p>

            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className={'uk-input ' + (inputError ? 'input-error ' : '') + (solved ? 'input-success' : '')}
                placeholder="Submit an answer here"
                value={input}
                onChange={this.onChange} />
      
              <button
                type="submit"
                className="uk-button uk-button-default uk-margin"
                >Submit</button>
            </form>

            {solved &&
              <div className="uk-card uk-text-success">
                <p>Good job! Now that you've found the spell to open doors, we're hoping that you'll open our door to the intern game!</p>
              </div>
            }

            {messages.map((element, index) => {
                return (
                  <div className="uk-card uk-text-warning" key={index}>
                    <p>{element}</p>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
