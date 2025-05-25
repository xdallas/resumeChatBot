import React, { useState } from 'react';

export default function ChatInput({ onSend, loading }) {
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
        placeholder={loading ? "Sending…" : "Write a message..."}
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
          background: loading ? '#999' : '#007bff',
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
