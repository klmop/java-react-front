import React,{ Component } from 'react';
import ApiService from '../services/ApiService';

export default class ListUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            message: null,
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result});
            });
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
            .then(res => {
                this.setState({users: this.state.users.filter(user => user.id !== userId)});
                this.setState({message: 'User suprimé avec succès!'});
            })
    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('add-user');
    }

    render() {
        return(
            <div>
                <h2 className="text-center">User Details</h2>
                <button className="btn btn-danger" onClick={() => this.addUser()} >Add User</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Username</th>
                            <th>Age</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(user => 
                            <tr key={user.id}>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.username}</td>
                                <td>{user.age}</td>
                                <td>{user.salary}</td>
                                <tr>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => this.deleteUser(user.id)} >Supprimer</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => this.editUser(user.id)} >Editer</button>
                                    </td>
                                </tr>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}