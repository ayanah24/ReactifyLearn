import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you! Your message has been sent successfully.');
    setTimeout(() => setFormStatus(''), 5000); // Clear message after 5 seconds
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Information Section */}
            <div className="p-8 sm:p-10 bg-gradient-to-br from-blue-600 to-teal-500 text-white rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Get in Touch
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium opacity-90">
                Ready to supercharge your learning? Fill out the form to connect with us!
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-white opacity-80"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md font-semibold tracking-wide">
                    123 Learning Lane, Knowledge City, 12345
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-white opacity-80"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4 text-md font-semibold tracking-wide">
                    +1 (800) 123-4567
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-white opacity-80"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md font-semibold tracking-wide">
                    support@crashcourse.com
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h2>

              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Full Name"
                  className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="tel" className="text-sm font-medium text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Your Phone Number"
                  className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-200 ease-in-out"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell us about your learning goals"
                  className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-200 ease-in-out resize-y"
                  rows="4"
                ></textarea>
              </div>

              {formStatus && (
                <div className="mt-4 text-green-600 font-medium">
                  {formStatus}
                </div>
              )}

              <button
                type="submit"
                className="mt-6 w-full sm:w-40 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React from 'react'
// import {Link, NavLink} from 'react-router-dom'

// export default function Contact() {
//     return (
//         <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
//             <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
//                 <div className="mt-8 overflow-hidden">
//                     <div className="grid grid-cols-1 md:grid-cols-2">
//                         <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
//                             <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
//                                 Get in touch: 
//                             </h1>
//                             <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
//                                 Fill in the form to start a conversation
//                             </p>

//                             <div className="flex items-center mt-8 text-gray-600">
//                                 <svg
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     stroke-width="1.5"
//                                     viewBox="0 0 24 24"
//                                     className="w-8 h-8 text-gray-500"
//                                 >
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                                     />
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                                     />
//                                 </svg>
//                                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                     Acme Inc, Street, State, Postal Code
//                                 </div>
//                             </div>

//                             <div className="flex items-center mt-4 text-gray-600">
//                                 <svg
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     stroke-width="1.5"
//                                     viewBox="0 0 24 24"
//                                     className="w-8 h-8 text-gray-500"
//                                 >
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                                     />
//                                 </svg>
//                                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                     +44 1234567890
//                                 </div>
//                             </div>

//                             <div className="flex items-center mt-2 text-gray-600">
//                                 <svg
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     stroke-width="1.5"
//                                     viewBox="0 0 24 24"
//                                     className="w-8 h-8 text-gray-500"
//                                 >
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                                     />
//                                 </svg>
//                                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                     info@acme.org
//                                 </div>
//                             </div>
//                         </div>

//                         <form className="p-6 flex flex-col justify-center">
//                             <div className="flex flex-col">
//                                 <label for="name" className="hidden">
//                                     Full Name
//                                 </label>
//                                 <input
//                                     type="name"
//                                     name="name"
//                                     id="name"
//                                     placeholder="Full Name"
//                                     className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                                 />
//                             </div>

//                             <div className="flex flex-col mt-2">
//                                 <label for="email" className="hidden">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     id="email"
//                                     placeholder="Email"
//                                     className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                                 />
//                             </div>

//                             <div className="flex flex-col mt-2">
//                                 <label for="tel" className="hidden">
//                                     Number
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     name="tel"
//                                     id="tel"
//                                     placeholder="Telephone Number"
//                                     className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                                 />
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
//                             >
//                                 Submit
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }