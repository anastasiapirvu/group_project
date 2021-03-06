//ALL DONE HERE! :)
import React, { useState } from 'react';


function UserLogin(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(event) {
        let { name, value } = event.target;
        switch (name) {
            case 'usernameInput':
                setUsername(value);
                break;
            case 'passwordInput':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(username, password);
    }

    return (
        <div className="UserLogin row">
            <div className="col-4 offset-4">
                <h2>Login</h2>
                
                {
                    props.error && (
                        <div className="alert alert-danger">{props.error}</div>
                    )
                }

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username
                            <input
                                type="text"
                                name="usernameInput"
                                required
                                className="form-control"
                                value={username}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Password
                            <input
                                type="password"
                                name="passwordInput"
                                required
                                className="form-control"
                                value={password}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );

}

export default UserLogin;