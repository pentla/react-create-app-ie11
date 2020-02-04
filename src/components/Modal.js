import React, { useState } from 'react'
import Modal from 'react-modal'

const styles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  content: {
    maxWidth: '85%',
    maxHeight: '90%',
    width: '600px',
    margin: 'auto',
    border: 'none',
    background: 'white',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}

const DefaultModal = () => {
  const [isOpen, setOpenModal] = useState(false)
  return (
  <div>
    <button onClick={() => setOpenModal(true)}>Open Modal</button>
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setOpenModal(false)}
      style={styles}
    >
      <div>It is modal</div>
    </Modal>
  </div>
  )
}

export default DefaultModal