import React from "react"
import PostsDisplay from "./PostsDisplay"
const MainPostsContainer = () => {
  return (
    <div>
      <div>
        <hr></hr>
        <span>Sort by: Top</span>
        <PostsDisplay />
      </div>
    </div>
  )
}

export default MainPostsContainer
