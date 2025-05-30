import React, { useState, useEffect, useRef } from 'react'

const baseUrl = 'https://duxui.duxapp.com/'

const path = '#/duxuiExample/example/'

export const Preview = ({ name }) => {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        position: 'relative',
        width: '375px',
        height: '667px',
        backgroundColor: '#fff',
        borderRadius: '40px',
        paddingTop: '15px',
        boxShadow: '0 0 0 10px #333, 0 0 30px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden'
      }}>
        {/* 顶部刘海 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '150px',
          height: '25px',
          backgroundColor: '#333',
          borderBottomLeftRadius: '15px',
          borderBottomRightRadius: '15px',
          zIndex: 10
        }} />

        {/* iframe 容器 */}
        <iframe
          src={`${baseUrl}${name ? `${path}${name}` : ''}`}
          id="preview-components"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '25px'
          }}
        />
      </div>
    </div>
  )
}

