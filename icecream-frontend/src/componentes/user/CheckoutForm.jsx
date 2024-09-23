import React from 'react'
import { CreditCard,IndianRupee } from 'lucide-react'

const CheckoutForm = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-[#1D1F2C] mb-6">Contact Information</h2>
      <form>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-[#4A5568] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5468FF]"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="phone" className="block text-sm font-medium text-[#4A5568] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5468FF]"
            placeholder="Enter your phone number"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#1D1F2C] mb-6">Shipping Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-[#4A5568] mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5468FF]"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-[#4A5568] mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5468FF]"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="address" className="block text-sm font-medium text-[#4A5568] mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5468FF]"
            placeholder="Enter your address"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-[#4A5568] mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5468FF]"
              placeholder="Enter your city"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-[#4A5568] mb-2">
              State
            </label>
            <input
              type="text"
              id="state"
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5468FF]"
              placeholder="Enter your state"
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-[#4A5568] mb-2">
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5468FF]"
              placeholder="Enter your ZIP code"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#1D1F2C] mb-6">Payment Method</h2>
        <div className="space-y-4 mb-8">
          <label className="flex items-center p-4 border border-[#E2E8F0] rounded-lg cursor-pointer">
            <input type="radio" name="paymentMethod" className="mr-3" />
            <CreditCard className="w-6 h-6 text-[#5468FF] mr-3" />
            <span className="font-medium text-[#1D1F2C]">Credit Card</span>
          </label>
          <label className="flex items-center p-4 border border-[#E2E8F0] rounded-lg cursor-pointer">
            <input type="radio" name="paymentMethod" className="mr-3" />
            <IndianRupee className="w-6 h-6 text-[#5468FF] mr-3" />
            <span className="font-medium text-[#1D1F2C]">Cash</span>
          </label>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm