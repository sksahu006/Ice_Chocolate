import React from 'react'
import { ChevronLeft, Printer, Truck } from 'lucide-react'
import OrderInfo from '../../componentes/user/OrderInfo'
import OrderItems from '../../componentes/user/OrderItems'
import ShippingInfo from '../../componentes/user/ShippingInfo'

const OrderDetails = () => {
  return (
    <div className="min-h-screen bg-[#F4F7FF] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <ChevronLeft className="w-6 h-6 text-[#5468FF] mr-2" />
            <span className="text-[#5468FF] font-medium">Back to orders</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-[#5468FF] font-medium">
              <Printer className="w-5 h-5 mr-2" />
              Print
            </button>
            <button className="flex items-center text-[#5468FF] font-medium">
              <Truck className="w-5 h-5 mr-2" />
              Track Order
            </button>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-[#1D1F2C] mb-8">Order Details</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <OrderInfo />
            <OrderItems />
          </div>
          <div>
            <ShippingInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails