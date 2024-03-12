import React from 'react'
import { Link } from 'react-router-dom'

function Thankyou() {
    return (
        <div>
            <div className="container mt-5">
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Thank You!</h4>
                    <p>Your order has been placed successfully.</p>
                    <hr />
                    <p className="mb-0">
                        To confirm your order, please pay 10% of the total amount.
                    </p>
                    <Link to='/qr'><button className='btn btn-success'>Pay Now</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Thankyou