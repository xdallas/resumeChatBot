# Resume Chatbot

Welcome to Resume Chatbot, a web-based assistant that helps you explore my résumé with conversational ease. Ask a question or click a suggestion to get started!

## Table of Contents

- Features
- Installation
- Usage
- Project Structure
- Tech Stack
- Contributing
- License

## Features

- Interactive Chat UI: send messages or click quick-reply buttons.
- Loading Indicator: shows when the bot is processing.
- Auto-scroll: always scrolls to the latest message.
- Quick Replies: sample questions for instant responses.
- Error Handling: displays a banner if something goes wrong.

## Installation

Follow these steps to set up the project locally:

# Clone the repository using SSH

git clone git@github.com:xdallas/resumeChatBot.git
cd resumeChatBot

# Install backend dependencies

cd backend
npm install

# Install frontend dependencies

cd ../resume-chatbot-frontend
npm install

## Usage

# Start the backend server

cd backend
node index.js

# In a new terminal, start the frontend application

cd ../resume-chatbot-frontend
npm start

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure

resumeChatBot/
├─ backend/ # Express API server
│ └─ index.js # Main server entry point
├─ resume-chatbot-frontend/ # React frontend application
│ ├─ src/
│ │ ├─ components/ # ChatWindow, ChatInput, QuickReplies
│ │ ├─ services/ # API helper functions
│ │ └─ App.js # Main React component
│ ├─ public/ # Static assets
│ └─ package.json # Frontend dependencies and scripts
├─ README.md # Project README
└─ .gitignore

## Tech Stack

- Frontend: React, Create React App
- Styling: TailwindCSS
- Backend: Node.js, Express, CORS

## Contributing

Contributions are welcome. To add new keywords or responses:

1. Open `backend/index.js`.
2. Locate the `responses` configuration.
3. Add or update entries:

   responses["education"] = "I studied Computer Science at University of Crete.";

4. Restart the backend server.

Feel free to open issues or submit pull requests for improvements.

## License

CSD © 2025 Christos Dallas
