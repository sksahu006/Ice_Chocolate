import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom/dist"

export default function Footer() {
  return (
    <footer className="bg-[#f8e5e5] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Scoops & Smiles</h3>
            <p className="text-sm text-gray-600 mb-4">Delicious gelato for every occasion.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-gray-600 hover:text-gray-900">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-600">123 Gelato Lane</p>
            <p className="text-sm text-gray-600">Frosty City, FC 12345</p>
            <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>&copy; 2023 Scoops & Smiles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}