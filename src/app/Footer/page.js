import React from 'react'

const page = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-4 md:mb-0">
            <h5 className="font-bold mb-2">About Us</h5>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel.</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h5 className="font-bold mb-2">Quick Links</h5>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Contact Us</h5>
            <ul className="text-sm space-y-2">
              <li><span className="font-semibold">Email:</span> info@example.com</li>
              <li><span className="font-semibold">Phone:</span> +123 456 7890</li>
              <li><span className="font-semibold">Address:</span> 123 Main St, Anytown, USA</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-xs">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default page