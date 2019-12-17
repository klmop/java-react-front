import React, { Component } from 'react';
import ApiService from '../services/ApiService';

class AddUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            age: '',
            salary: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            age: this.state.age,
            salary: this.state.salary,
        };
        ApiService.addUser(user)
            .then(res => {
                this.setState({ message: 'User ajouter avec succes' });
                this.props.history.push('/users');
            });
    }

    onChange = (e) => {
        console.log('onChange');
        // this.props.navigation.navigate.push('/');
        this.setState( { [e.target.name]: e.target.value});
    }

    render () {
        return (
            <div>
                <h2 className="text-center" >Add User</h2>
                <form>
                    <div className="form-group">
                        <label>Nom User</label>
                        <input type="text" placeholder="username" name="username" className="form-control" value={this.state.username} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Prénom</label>
                        <input type="text" placeholder="firstname" name="firstname" className="form-control" value={this.state.firstname} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Salary</label>
                        <input type="number" placeholder="salary" name="salary" className="form-control" value={this.state.salary} onChange={this.onChange} />
                    </div>
                    <button className="btn btn-success" onClick={this.saveUser} >Sauvegarder</button>
                </form>
            </div>
        );
    }
}

export default AddUserComponent;