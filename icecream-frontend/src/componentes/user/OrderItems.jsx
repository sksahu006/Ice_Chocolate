import React from 'react'

const OrderItems = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-[#1D1F2C] mb-6">Order Items</h2>
      <div className="space-y-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=80&width=80" alt="Product" className="w-20 h-20 object-cover rounded-lg mr-4" />
            <div>
              <h3 className="font-semibol
d text-[#1D1F2C]">Ice-cream</h3>
              <p className="text-sm text-[#4A5568]">Quantity: 1</p>
            </div>
          </div>
          <span className="font-semibold text-[#1D1F2C]">$129.99</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=80&width=80" alt="Product" className="w-20 h-20 object-cover rounded-lg mr-4" />
            <div>
              <h3 className="font-semibold text-[#1D1F2C]">Chocolate</h3>
              <p className="text-sm text-[#4A5568]">Quantity: 1</p>
            </div>
          </div>
          <span className="font-semibold text-[#1D1F2C]">$59.99</span>
        </div>
      </div>
      <div className="border-t border-[#E2E8F0] pt-6">
        <div className="flex justify-between mb-3">
          <span className="text-[#4A5568]">Subtotal</span>
          <span className="font-semibold text-[#1D1F2C]">$189.98</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-[#4A5568]">Shipping</span>
          <span className="font-semibold text-[#1D1F2C]">$10.00</span>
        </div>
        <div className="flex justify-between mb-6">
          <span className="text-[#4A5568]">Tax</span>
          <span className="font-semibold text-[#1D1F2C]">$15.20</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-[#1D1F2C]">
          <span>Total</span>
          <span>$215.18</span>
        </div>
      </div>
    </div>
  )
}

export default OrderItems