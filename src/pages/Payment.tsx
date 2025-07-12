import React, { useState } from 'react';

const Payment = () => {
  const [studentId, setStudentId] = useState('');
  const [term, setTerm] = useState('Term 1');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [status, setStatus] = useState('');

  const handlePayment = () => {
    // Simulate payment logic
    if (studentId && amount) {
      setStatus('Processing...');
      setTimeout(() => {
        setStatus('✅ Payment Successful!');
      }, 2000);
    } else {
      setStatus('❌ Please fill all fields.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Student Fee Payment</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Payment Summary */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Student ID"
              className="border p-2 rounded-md"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
            <select
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="border p-2 rounded-md"
            >
              <option>Term 1</option>
              <option>Term 2</option>
              <option>Term 3</option>
            </select>
            <input
              type="number"
              placeholder="Amount (₹)"
              className="border p-2 rounded-md"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
          <div className="flex flex-col gap-3">
            {['Credit Card', 'UPI', 'Net Banking', 'Cash'].map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
                {method}
              </label>
            ))}
          </div>

          <button
            onClick={handlePayment}
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Pay Now
          </button>

          {status && <p className="mt-4 text-sm">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Payment;
