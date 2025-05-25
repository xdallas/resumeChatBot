import React, { useEffect, useRef } from 'react';

export default function ChatWindow({ messages }) {
  const containerRef = useRef(null);
  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (containerRef.current) {
      const el = containerRef.current;
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);
  
  return (
    <div 
      ref={containerRef}
      style={{
      flex: 1,
      overflowY: 'auto',
      padding: 16,
      background: '#f9f9f9',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {messages.length === 0
        ? <p style={{ color: '#666' }}>No messages yet.</p>
        : messages.map((msg, i) => (
          <div
          key={i}
          style={{
            alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
            margin: '6px 0',
            padding: '10px 14px',
            borderRadius: 16,
            background: msg.from === 'user' ? '#DCF8C6' : '#FFFFFF',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            maxWidth: '75%',
            lineHeight: 1.4,
            wordBreak: 'break-word'
          }}
        >
          {msg.text}
        </div>
        
          ))
      }
    </div>
  );
}
