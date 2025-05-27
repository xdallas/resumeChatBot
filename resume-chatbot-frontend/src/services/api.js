// We just call sendMessage with the user's prompt and return the reply from the server, instead of writing to every component that needs to send a message.
export async function sendMessage(prompt) {
  // We send a POST request to the backend server with the user's prompt
    const res = await fetch('http://localhost:4000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    // wait for the response and parse it as JSON
    const data = await res.json();
    // return the reply from the server
    return data.reply;
  }
  