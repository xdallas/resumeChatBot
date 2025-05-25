const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const responses = [
  {
    keys: ["contact", "email", "phone", "linkedin", "github"],
    reply: "You can reach me at xdallass1@gmail.com or on LinkedIn at https://www.linkedin.com/in/christos-dallas-286167227/."
  },
  {
    keys: ["about", "profile", "yourself", "who are you"],
    reply: "I am Christos Dallas, a 4th-year Computer Science student at the University of Crete."
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
    keys: ["soft skills", "teamwork", "leadership", "communication"],
    reply: "I have strong communication, teamwork, leadership, and problem-solving skills."
  }
];


app.post('/chat', (req, res) => {
  const lower = req.body.prompt.toLowerCase();
  const entry = responses
    .sort((a,b) => b.keys[0].length - a.keys[0].length)
    .find(e => e.keys.some(k => lower.includes(k)));
  const reply = entry ? entry.reply : "Sorry, I didn't understand that. Can you ask something else?";
  res.json({ reply });
});
  

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`--> Backend running on http://localhost:${PORT}`)
);
