import React from 'react'
const NewCity=()=> {
    return (
        <div class="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
  <div class="content text-3xl text-center md:text-left">
    <h1 class="text-5xl text-blue-500 font-bold">Explore New City</h1>
    <p>Quick view of the major cities.</p>
  </div>
  <div class="container mx-auto flex flex-col items-center">
    <form class="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
    <input type="text" placeholder="Image-Link" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />

      <input type="text" placeholder="Title" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <input type="text" placeholder="Text" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <button class="bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">+</button>
      
      
    </form>

  </div>
</div>    )
}

export default NewCity
