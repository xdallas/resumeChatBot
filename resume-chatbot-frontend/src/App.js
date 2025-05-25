import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import QuickReplies from './components/QuickReplies';
import { sendMessage } from './services/api';
import './index.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const sampleQuestions = [
       "Tell me about your skills",
       "What projects have you done?",
       "Give me your education background",
       "How can I contact you?"
     ];

  const handleSend = async (text) => {
    setMessages(prev => [...prev, { from: 'user', text }]);
    setLoading(true);
    let reply;
    try {
      reply = await sendMessage(text);
      //Texnito delay
      await new Promise(res => setTimeout(res, 300));
    } catch {
      reply = "Could not connect to the server.";
      setError("Could not connect to the server.");
      setTimeout(() => setError(''), 3000);
    }
    setMessages(prev => [...prev, { from: 'bot', text: reply }]);
    setLoading(false);
    if (error) {
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <h1 style={{
        textAlign: 'center',
        margin: '16px 0',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
      Christos Dallas • Resume Chatbot
    </h1>
      {error && (
        <div style={{
          background: '#f8d7da',
          color: '#721c24',
          padding: '8px 16px',
          margin: '8px 16px',
          borderRadius: 4,
          border: '1px solid #f5c6cb',
          textAlign: 'center',
          fontSize: 14
        }}>
          {error}
        </div>
      )}
      <ChatWindow messages={messages} />
      <QuickReplies
       questions={sampleQuestions}
       onSelect={handleSend}
       disabled={loading}
     />
      <ChatInput
        onSend={handleSend}
        loading={loading}
    />
    </div>
  );
}

export default App;
