import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { sendMessage } from './services/api';
import './index.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    setMessages(prev => [...prev, { from: 'user', text }]);
    setLoading(true);
    let reply;
    try {
      reply = await sendMessage(text);
      //Texnito delay
      await new Promise(res => setTimeout(res, 300));
    } catch {
      reply = "Σφάλμα σύνδεσης, δοκίμασε ξανά.";
    }
    setMessages(prev => [...prev, { from: 'bot', text: reply }]);
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <ChatWindow messages={messages} />
      <ChatInput
        onSend={handleSend}
        loading={loading}
    />
    </div>
  );
}

export default App;
