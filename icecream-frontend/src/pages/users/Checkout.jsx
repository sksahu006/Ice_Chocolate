import React from 'react'
import { ChevronLeft } from 'lucide-react'
import CheckoutForm from '../../componentes/user/CheckoutForm'
import OrderSummary from '../../componentes/user/OrderSummary'

const Checkout = () => {
    return (
      <div className="min-h-screen bg-[#F4F7FF] py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <ChevronLeft className="w-6 h-6 text-[#5468FF] mr-2" />
            <span className="text-[#5468FF] font-medium">Back to shop</span>
          </div>
          <h1 className="text-4xl font-bold text-[#5468FF] mb-8">Checkout</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CheckoutForm />
            <OrderSummary />
          </div>
        </div>
      </div>
    )
  }

export default Checkout