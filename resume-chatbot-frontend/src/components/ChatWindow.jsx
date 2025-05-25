import React, { useEffect, useRef } from 'react';

export default function ChatWindow({ messages }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom whenever messages change
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
        background: '#F1F1F2',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {messages.length === 0 ? (
        <div style={{
          flex: 1,                   // fill available space
          display: 'flex',
          justifyContent: 'center', // center horizontally
          alignItems: 'center'      // center vertically
        }}>
          <p style={{
            color: '#002C54',
            fontSize: 16,
            margin: 0
          }}>
            No messages yet.
          </p>
        </div>
      ) : (
        messages.map((msg, i) => (
          <div
            key={i}
            style={{
              alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
              margin: '6px 0',
              padding: '10px 14px',
              borderRadius: 16,
              background: msg.from === 'user' ? '#BFDBFE' : '#FFFFFF',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              maxWidth: '75%',
              lineHeight: 1.4,
              wordBreak: 'break-word'
            }}
          >
            {msg.text}
          </div>
        ))
      )}
    </div>
  );
}
