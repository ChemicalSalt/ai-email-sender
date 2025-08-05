# AI Email Sender

A full-stack web app that uses **Groq AI (LLaMA 3)** to generate professional emails and sends them via **Gmail** — all from a simple UI.

## Live Demo
[View AI Email Sender](https://ai-email-sender.netlify.app/)

## Features  
- Uses **Groq (LLaMA 3)** via `@ai-sdk/groq` to generate emails  
- Sends emails using **Nodemailer** with Gmail  
- Simple frontend (HTML + JS, inline CSS)  
- Hosted with **Netlify** (frontend) and **Render** (backend)

## Tech Stack  
| Frontend     | Backend           | AI                | Deployment               |  
|--------------|-------------------|--------------------|---------------------------|  
| HTML, JS     | Node.js, Express  | Groq (LLaMA 3)     | Netlify (frontend)       |  
| CSS   | Nodemailer, dotenv| `@ai-sdk/groq`     | Render (backend API)     |


## Setup (Local)  
1. Clone the repo  
   git clone https://github.com/your-username/ai-email-sender.git  
   cd ai-email-sender/server

2. Install dependencies  
   npm install

3. Create a `.env` file inside `/server`:  

4. Run the backend  
   node index.js

5. Open `client/index.html` locally or deploy it to Netlify.

## Deployment  
- **Frontend (Netlify):** https://ai-email-sender.netlify.app/
- **Backend (Render):** https://email-sender-ai.onrender.com/

## How It Works  
1. User enters a prompt like “Write a thank-you email after interview”  
2. `POST /api/generate-email` → Groq LLaMA 3 generates email body  
3. User edits subject + recipient  
4. `POST /api/send-email` → Sends via Gmail using Nodemailer
