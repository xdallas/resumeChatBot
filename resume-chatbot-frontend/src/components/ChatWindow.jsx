import React from 'react';

export default function ChatWindow({ messages }) {
  return (
    <div style={{
      flex: 1,
      overflowY: 'auto',
      padding: 16,
      background: '#f9f9f9',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {messages.length === 0
        ? <p style={{ color: '#666' }}>Δεν υπάρχουν μηνύματα ακόμα.</p>
        : messages.map((msg, i) => (
            <div
              key={i}
              style={{
                alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                margin: '4px 0',
                padding: 8,
                borderRadius: 4,
                background: msg.from === 'user' ? '#d0eaff' : '#eee',
                maxWidth: '80%'
              }}>
              {msg.text}
            </div>
          ))
      }
    </div>
  );
}
