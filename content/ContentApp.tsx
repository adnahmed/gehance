import React from 'react'
import'./content.css'
export default function ContentApp() {


  return (
    <div>
      <form id='searchstar' action="/search" method="get">
        <label htmlFor="search">Search:</label>
        <input placeholder='Search Stars Repo' type="search" id="u" name="i" />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
