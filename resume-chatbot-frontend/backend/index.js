const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Define the responses array with keywords and replies
const responses = [
  {
    keys: ["Name", "name", "your name"],
    reply: "My name is Christos Dallas."
  },
  {
    keys: ["contact", "reach", "get in touch]"],
    reply: "You can reach me at xdallass1@gmail.com or on LinkedIn at https://www.linkedin.com/in/christos-dallas-286167227/ or on GitHub at https://github.com/xdallas or call me at +306985848000."
  },
  {
    keys: ["email,", "mail"],
    reply: "You can reach me at xdallass1@gmail.com."
  },
  {
    keys: ["phone", "call", "number"],
    reply: "You can call me at +306985848000."
  },
  {
    keys: ["LinkedIn", "linkedin"],
    reply: "You can reach me at https://www.linkedin.com/in/christos-dallas-286167227/."
  },
  {
    keys: ["GitHub", "github"],
    reply: "You can reach me at https://github.com/xdallass."
  },
  {
    keys: ["about", "profile", "yourself", "who are you", "introduce yourself"],
    reply: "I am Christos Dallas, a 4th-year Computer Science student at the University of Crete."
  },
  {
    keys: ["age", "old", "how old", "years old"],
    reply: "I am 22 years old."
  },
  {
    keys: ["education", "study", "degree", "university"],
    reply: "I am studying Computer Science at the University of Crete, currently with a 70% grade."
  },
  {
    keys: ["experience", "work", "employment", "professional"],
    reply: "I worked as a Sales Associate at Hellenic Duty-Free Shops and as a Sales Assistant at a local supermarket."
  },
  {
    keys: ["skills", "technical", "computer skills", "programming"],
    reply: "My technical skills include C, C++, Java, Python, JavaScript, HTML, CSS, SQL and Git."
  },
  {
    keys: ["languages", "language", "spoken", "speak", "fluent"],
    reply: "I speak native Greek, fluent English, and basic German and French."
  },
  {
    keys: ["hobbies", "interests", "free time", "outside"],
    reply: "In my free time I enjoy traveling, exploring cultures, and playing tennis."
  },
  {
    keys: ["volunteer", "volunteering", "community"],
    reply: "I volunteered serving meals to the homeless and joined a beach cleanup for sea turtle conservation."
  },
  {
    keys: ["soft skills","interpersonal skills", "communication", "communicate", "teamwork", "leadership", "problem-solving"],
    reply: "I have strong communication, teamwork, leadership, and problem-solving skills."
  }
];


app.post('/chat', (req, res) => {
  // Convert prompt to lowercase
  const lower = req.body.prompt.toLowerCase();
   // Sort by keyword length (longest first)
  const entry = responses
    .sort((a,b) => b.keys[0].length - a.keys[0].length)
    .find(e => e.keys.some(k => lower.includes(k)));

  // If we found a matching entry, use its reply; otherwise send a default message
  const reply = entry ? entry.reply : "Sorry, I didn't understand that. Can you ask me something else?";

  // Send the reply back to the client
  res.json({ reply });
});
  
// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`--> Backend running on http://localhost:${PORT}`)
);
