import React from 'react';

function Qr() {
    return (
        <div>
            <div className="container payment-container">
                <h2 className="mb-4">Payment Details</h2>

                <div className='row'>
                    <div className='col-6'>
                        <div className="mb-4">
                            <h5>Scan the QR Code for Payment</h5>
                            <img
                                className="qr-code"
                                src="QR.jpg"
                                alt="QR Code"
                                style={{ height: '200px' }}
                            />
                        </div>
                    </div>



                    <div className='col-6'>
                        <form>
                            <h5>Bank Details for RTGS or NEFT</h5>
                            <div className="form-group">
                                <label htmlFor="accountHolder"><b>Account Holder Name: </b></label>
                                Siddhi Mobiles

                            </div>
                            <div className="form-group">
                                <label htmlFor="accountNumber"><b>Account Number: </b></label>
                                123456789
                            </div>
                            <div className="form-group">
                                <label htmlFor="accountNumber"><b>IFSC Code: </b></label>
                                SBIN000123
                            </div>
                            <div className="form-group">
                                <label htmlFor="bankName"><b>Bank Name: </b></label>
                                State Bank Of India
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qr