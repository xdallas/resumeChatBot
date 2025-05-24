// src/services/api.js
export async function sendMessage(prompt) {
    const res = await fetch('http://localhost:4000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    return data.reply;
  }
  