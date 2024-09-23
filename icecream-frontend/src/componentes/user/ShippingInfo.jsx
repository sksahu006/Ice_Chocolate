import React from 'react'

const ShippingInfo = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-[#1D1F2C] mb-6">Shipping Information</h2>
      <div className="mb-6">
        <h3 className="font-semibold text-[#1D1F2C] mb-2">Address</h3>
        <p className="text-[#4A5568]">John Doe</p>
        <p className="text-[#4A5568]">123 Main St</p>
        <p className="text-[#4A5568]">Anytown, ST 12345</p>
        <p className="text-[#4A5568]">United States</p>
      </div>
      <div>
        <h3 className="font-semibold text-[#1D1F2C] mb-2">Shipping Method</h3>
        <p className="text-[#4A5568]">Standard Shipping</p>
        <p className="text-sm text-[#5468FF] mt-2">Delivered on March 29, 2023</p>
      </div>
    </div>
  )
}

export default ShippingInfo