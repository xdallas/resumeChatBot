import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { sendMessage } from './services/api';
import './index.css';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    setMessages(prev => [...prev, { from: 'user', text }]);
    let reply;
    try {
      reply = await sendMessage(text);
    } catch {
      reply = "Σφάλμα σύνδεσης, δοκίμασε ξανά.";
    }
    setMessages(prev => [...prev, { from: 'bot', text: reply }]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default App;
