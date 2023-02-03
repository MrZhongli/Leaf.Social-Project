import React from 'react'
import ChatBoxContainer from './ChatBoxContainer'

const BubbleChat = () => {
  return (
      <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
              {/* <!-- Page content here --> */}
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
          </div>
          {/* <div className="drawer-side">
              <ChatBoxContainer className="" htmlFor="my-drawer"/>
          </div> */}
      </div>
  )
}

export default BubbleChat