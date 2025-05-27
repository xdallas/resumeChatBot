import React, { useState, useRef, useEffect } from 'react';

export default function ChatInput({ onSend, loading }) {
  const [text, setText] = useState('');
  // Create a ref object for the auto focus input
  const inputRef = useRef(null);

  // Focus the input when loading is false
  useEffect(() => {
    if (inputRef.current && !loading) {
      inputRef.current.focus();
    }
  }, [loading]); // Runs the first time and when loading changes

  const submit = () => {
    const msg = text.trim(); // Remove spaces from the start and end
    if (!msg || loading) return;
    onSend(msg); 
    setText(''); // Clear the input after sending to be ready for the next message
  };

  return (
    <div style={{
      display: 'flex',
      padding: 16,
      borderTop: '1px solid #ddd',
      background: '#fff'
    }}>
      <input
        ref={inputRef}         
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && submit()}
        placeholder={loading ? "Sending…" : "Type a message…"}
        disabled={loading}
        style={{
          flex: 1,
          padding: '10px 12px',
          border: '1px solid #ccc',
          borderRadius: 20,
          outline: 'none',
          background: loading ? '#f5f5f5' : '#ffffff',
          fontSize: 14
        }}
      />
      <button
        onClick={submit}
        disabled={loading}
        style={{
          marginLeft: 8,
          padding: '10px 20px',
          background: loading ? '#999' : '#002C54',
          color: '#ffffff',
          border: 'none',
          borderRadius: 20,
          boxShadow: loading ? 'none' : '0 2px 5px rgba(0,0,0,0.1)',
          cursor: loading ? 'default' : 'pointer',
          fontSize: 14
        }}
      >
        {loading ? 'Sending…' : 'Send'}
      </button>
    </div>
  );
}
