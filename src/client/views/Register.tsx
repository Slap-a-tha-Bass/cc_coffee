import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { apiService } from '../utils/api-service';

const Register = () => {

    const history = useHistory();

    const [full_name, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/register', 'POST', { email, password, full_name })
            .then(token => {
                localStorage.setItem('token', token);
                history.push('/confirmation');
            })
            .catch(() => history.push('/invalid'))
    }

    return (
        <div className="container">
            <h3 className="text-primary m-2">Register New User</h3>
            <form className="form-group col-md-4 bg-light">
            <label className="my-1 font-weight-bold">Full Name</label>
                <input className="form-control" type="text"  value={full_name} onChange={e => setFullName(e.target.value)} />
                <label className="my-1 font-weight-bold">Email</label>
                <input className="form-control" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label className="my-1 font-weight-bold">Password</label>
                <input className="form-control" type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} />
                <div className="d-flex justify-content-center">
                    <button onClick={handleRegister} className="btn btn-outline-primary my-3">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register;
