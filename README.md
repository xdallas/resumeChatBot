# Resume Chatbot

Welcome to Resume Chatbot, a web-based assistant that helps you explore my resume through a conversation. Ask a question or click a suggestion to get started!

## Table of Contents

- Features
- Installation
- Usage
- Tech Stack
- Contributing
- License

## Features

- Interactive Chat UI: send messages or click quick-reply buttons.
- Loading Indicator: shows when the bot is processing.
- Auto-scroll: always scrolls to the latest message.
- Quick Replies: sample questions for instant responses.
- Error Handling: displays a banner if something goes wrong.

## Supported Queries

- **Contact** (contact, email, phone, LinkedIn, GitHub, reach, get in touch)
- **About Me** (profile, yourself, who are you, introduce yourself, who is Christos Dallas, who is xdallass)
- **Education** (education, study, degree, university, college, spoudes, spoudazeis, panepistimio)
- **Experience** (experience, work, employment, professional)
- **Technical Skills** (skills, technical, computer skills, programming, coding, software, hardware, programming languages, programming skills, texnites dexiotites)
- **Soft Skills** (soft skills, interpersonal skills, communication, communicate, teamwork, leadership, problem-solving, koinonikes dexiotites)
- **Languages** (languages, language, spoken, speak, fluent, speak languages, foreign languages, glosses, glossa)
- **Hobbies** (hobby, hobbies, interest, interests, free time, outside, xobi, xobies, eleftheros xronos, travel, culture, sports)
- **Volunteering** (volunteer, volunteering, community, charity, voluntary work, volunteer work, ethelontismos, ethelontiki douleia)
- **High School** (high school, lykeio, liceo, lyceum)
- **Key Modules** (key modules, key subjects, key courses, modules, courses, subjects)

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

Open your browser and navigate to [http://localhost:3000].

## Tech Stack

- Frontend: React, Create React App
- Styling: TailwindCSS
- Backend: Node.js, Express, CORS

## Contributing

Contributions are welcome. To add new keywords or responses:

1. Open `backend/index.js`.
2. ocate the responses array.
3. Add or update entries with new keyword arrays and replies.
4. Restart the backend server.

Feel free to open issues or submit pull requests for improvements.

## License

CSD © 2025 Christos Dallas
