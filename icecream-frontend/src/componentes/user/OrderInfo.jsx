import React from 'react'

const OrderInfo = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-[#1D1F2C] mb-6">Order Information</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-[#4A5568] mb-1">Order number</p>
          <p className="font-semibold text-[#1D1F2C]">#ORD-12345</p>
        </div>
        <div>
          <p className="text-sm text-[#4A5568] mb-1">Date placed</p>
          <p className="font-semibold text-[#1D1F2C]">March 22, 2023</p>
        </div>
        <div>
          <p className="text-sm text-[#4A5568] mb-1">Total amount</p>
          <p className="font-semibold text-[#1D1F2C]">$215.18</p>
        </div>
        <div>
          <p className="text-sm text-[#4A5568] mb-1">Payment method</p>
          <p className="font-semibold text-[#1D1F2C]">Credit Card (Visa)</p>
        </div>
      </div>
    </div>
  )
}

export default OrderInfo