// Make a quick HTTP server that listens for POST requests on /chat
const express = require('express'); 

// Backend-Frontend different IPs, so we need to enable CORS not to blocked by the browser
const cors = require('cors');


// Create an Express app
const app = express();
// Every request will be from the frontend, so we need to enable CORS
app.use(cors());
app.use(express.json());

// Define the responses array with keywords and replies
const responses = [
  {
    keys: ["Hello", "Hi", "Hey", "Hallo", "Greetings", "Good day", "Good morning", "Good afternoon", "Good evening"],
    reply: "Hi there! How can I assist you today?"
  },
  {
    keys: ["Can you help me?", "Help", "Need assistance", "Can you assist me?", "resume help", "resume assistance", "resume questions", "resume related questions"],
    reply: "Yes, I can help you with your resume-related questions. What would you like to know?"
  },
  {
    keys: ["Name", "name", "your name"],
    reply: "My name is Christos Dallas."
  },
  {
    keys: ["onoma", "pos se lene","pws se lene","pos onomazesai","pos onomazese", "pws onomazesai","pws onomazese"],
    reply: "Me lene Xristo Dalla."
  },
  {
    keys: ["age", "old", "how old", "years old"],
    reply: "I am 22 years old."
  },
  {
    keys: ["poso xronon eisai", "poso xronwn eisai", "ilikia","poso eisai"],
    reply: "Eimai 22 xronwn."
  },
  {
    keys: ["education", "study", "degree", "university", "college"],
    reply: "I am studying Computer Science at the University of Crete, currently with a 70% grade."
  },
  {
    keys: ["spoudes", "spoudazeis", "panepistimio"],
    reply: "Spoudazw Computer Science sto University of Crete."
  },
  {
    keys: ["hobby", "hobbies", "interest", "interests", "free time", "outside", "xobi", "xobies", "eleftheros xronos"],
    reply: "In my free time I enjoy traveling, exploring cultures, and playing tennis."
  },
  {
    keys: ["skills", "abilities", "capabilities", "talents", "dexiotites", "ikanotites"],
    reply: "Ask again but specify if you mean technical skills or soft skills."
  },
  {
    keys: ["technical", "computer skills", "programming", "coding", "software", "hardware", "programming languages", "programming skills", "texnites dexiotites"],
    reply: "My technical skills include C, C++, Java, Python, JavaScript, HTML, CSS, SQL and Git."
  },
  {
    keys: ["soft skills","soft", "interpersonal skills", "communication", "communicate", "teamwork", "leadership", "problem-solving","koinonikes dexiotites"],
    reply: "I have strong communication, teamwork, leadership, and problem-solving skills."
  },
  {
    keys: ["contact", "reach", "get in touch"],
    reply: "You can reach me at xdallass1@gmail.com or on LinkedIn at https://www.linkedin.com/in/christos-dallas-286167227/ or on GitHub at https://github.com/xdallas or call me at +306985848000."
  },
  {
    keys: ["email", "mail", "contact email", "email address", "email me", "send email"],
    reply: "You can reach me at xdallass1@gmail.com."
  },
  {
    keys: ["phone", "call", "number", "contact number", "phone number", "mobile", "cell"],
    reply: "You can call me at +306985848000."
  },
  {
    keys: ["social media", "social"],
    reply: "You can reach me at https://www.linkedin.com/in/christos-dallas-286167227/ or https://github.com/xdallass."
  },
  {
    keys: ["LinkedIn"],
    reply: "You can reach me at https://www.linkedin.com/in/christos-dallas-286167227/."
  },
  {
    keys: ["GitHub"],
    reply: "You can reach me at https://github.com/xdallass."
  },
  {
    keys: ["profile", "yourself", "who are you", "introduce yourself", "who is Christos Dallas", "who is xdallass"],
    reply: "I am Christos Dallas, a 4th-year Computer Science student at the University of Crete."
  },
  {
    keys: ["experience", "work", "employment", "professional"],
    reply: "I worked as a Sales Associate at Hellenic Duty-Free Shops and as a Sales Assistant at a local supermarket."
  },
  
  {
    keys: ["languages", "language", "spoken", "speak", "fluent", "speak languages", "foreign languages", "glosses", "glossa"],
    reply: "I am a native Greek speaker, fluent in English, and have basic knowledge of German and French."
  },
  {
    keys: ["volunteer", "volunteering", "community", "charity", "voluntary work", "volunteer work", "ethelontismos", "ethelontiki douleia"],
    reply: "I volunteered serving meals to the homeless and joined a beach cleanup for sea turtle conservation."
  },
  {
    keys: ["High School", "lykeio", "liceo", "lyceum"],
    reply: "I studied at 2nd Lyceum of Chania Crete."
  },
  {
    keys: ["key modules", "key subjects", "key courses", "key modules", "modules", "courses", "subjects"],
    reply: "Key modules include Data Structures, Software Technology Laboratory, Operating Systems, Computer Networks, Introduction to Secure Systems, Introduction to Cryptography, Object-Oriented Programming, Files and Databases and Data Science."
  }
];


// Normalize incoming prompt: lowercase, strip punctuation, collapse spaces
app.post('/chat', (req, res) => {
  const lowerPrompt = (req.body.prompt || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();


  // Sort the responses by longest key first, then find the first matching entry
  const entry = responses
    .slice() // create a shallow copy to avoid mutating the original array
    .sort((a, b) => {
      // Calculate the maximum key length for each entry
      const maxA = Math.max(...a.keys.map(k => k.length));
      const maxB = Math.max(...b.keys.map(k => k.length));
      return maxB - maxA; // first sort by longest key
    })
    .find(e =>
      // check if any key matches the prompt
      e.keys.some(key => new RegExp(`\\b${key.toLowerCase()}\\b`).test(lowerPrompt)) 
    );
  
  // If no entry matches, provide a default reply
  const reply = entry ? entry.reply : "Sorry, I didn't understand that. Can you ask something else?";
  res.json({ reply });
});


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`------> Backend running on http://localhost:${PORT}`)
);
