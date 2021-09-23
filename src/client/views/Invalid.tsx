import React from 'react';
import { Link } from 'react-router-dom';

const Invalid = () => {
    return (
        <main className="container">
            <div className="col-md-6 bg-light p-3 border rounded">
                <div className="d-flex justify-content-center">
                    <h1 className="text-warning" >Invalid Credentials</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to="/login" className="btn btn-warning">Try Again</Link>
                </div>
            </div>
        </main>
    )
}

export default Invalid;
