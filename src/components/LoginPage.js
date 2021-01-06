import { Component } from 'react';

class LoginPage extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            pass: '',
            error: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePassChange(event) {
        this.setState({
            pass: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if (!this.state.email) {
            return this.setState({error: 'Email address required'});
        }

        if (!this.state.email) {
            return this.setState({error: 'Password required'});
        }

        console.log("submitted", event.target)
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                  {
                    this.state.error &&
                    <h3 data-test="error" onClick={this.dismissError}>
                      <button onClick={this.dismissError}>✖</button>
                      {this.state.error}
                    </h3>
                  }
                  <label>User Name</label>
                  <input type="text" data-test="username" value={this.state.email} onChange={this.handleEmailChange} />
              
                  <label>Password</label>
                  <input type="password" data-test="password" value={this.state.pass} onChange={this.handlePassChange} />
              
                  <input type="submit" value="Log In" data-test="submit" />
                </form>
            </div>
        );
    }
}

export default LoginPage;