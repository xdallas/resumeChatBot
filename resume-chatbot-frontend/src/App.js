import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import QuickReplies from './components/QuickReplies';
import { sendMessage } from './services/api';
import './index.css';

function App() {
  // State to manage messages, loading status, and error messages
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  // Sample questions for quick replies
  const sampleQuestions = [
       "What is your name?",
       "How old are you?",
       "What is your education?",
       "What are your hobbies?",
       "Tell me about your soft skills?",
       "Tell me about your technical skills?",
       "What is your experience?",
       "What languages do you speak?",
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
      // Error handling when the server is closed
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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#F1F1F2' }}>
      <h1 style={{
        textAlign: 'center',
        margin: '16px 0',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#002C54',
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
