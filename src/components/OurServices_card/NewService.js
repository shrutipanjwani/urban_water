import React from 'react'
const NewService=()=> {
    return (
        <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
  <div className="content text-3xl text-center md:text-left">
    <h1 className="text-5xl text-blue-500 font-bold">Our Services</h1>
    <p>Feature your business with the service you provide.</p>
  </div>
  <div class="container mx-auto flex flex-col items-center">
    <form class="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
    <input type="text" placeholder="Image-Link" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />

      <input type="text" placeholder="Title" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <input type="text" placeholder="Text" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <button class="bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">+</button>
      
      
    </form>

  </div>
</div>    )
}

export default NewService
