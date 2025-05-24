const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Προκαθορισμένες απαντήσεις βάσει λέξεων-κλειδιών
const responses = {
  about: "Είμαι ένας απλός chatbot που απαντάει σε ερωτήσεις για το βιογραφικό μου.",
  projects: "Έχω φτιάξει μια web εφαρμογή καιρού, ένα todo app και άλλα.",
  skills: "Γνωρίζω JavaScript, React, Node.js, Express, HTML/CSS."
};

app.post('/chat', (req, res) => {
    const { prompt } = req.body;
    const lower = prompt.toLowerCase();
  
    // Τακτοποίηση keys κατά φθίνουσα σειρά μήκους
    const key = Object
      .keys(responses)
      .sort((a, b) => b.length - a.length)
      .find(k => lower.includes(k));
  
    const reply = key
      ? responses[key]
      : "Συγγνώμη, δεν κατάλαβα την ερώτησή σου.";
    res.json({ reply });
  });
  

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
);
