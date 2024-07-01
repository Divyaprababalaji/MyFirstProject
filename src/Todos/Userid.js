import React from 'react'

const Userid = (e) => {

  return (
    <div  style={{
        display: "flex",
        alignSelf: "flex-end",
        fontStyle: "italic",
      }}>UserID: {e.userid.userId}</div>
  )
}

export default Userid;