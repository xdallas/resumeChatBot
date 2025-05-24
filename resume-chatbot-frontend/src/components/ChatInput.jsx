import React, { useState } from 'react';

export default function ChatInput({ onSend }) {
  const [text, setText] = useState('');

  const submit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText('');
  };

  return (
    <div style={{
      display: 'flex',
      padding: 16,
      borderTop: '1px solid #ddd',
      background: '#fff'
    }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') submit(); }}
        placeholder="Γράψε μήνυμα…"
        style={{
          flex: 1,
          padding: 8,
          border: '1px solid #ccc',
          borderRadius: 4
        }}
      />
      <button
        onClick={submit}
        style={{
          marginLeft: 8,
          padding: '8px 16px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}
      >
        Send
      </button>
    </div>
  );
}
