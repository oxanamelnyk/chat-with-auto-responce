# Chat with Auto Response

A full-stack chat application with an auto-response feature powered by random quotes from [Zenquotes](https://zenquotes.io). The project includes chat management, real-time message sending with bot replies, and third-party authentication support.

## Main features
- Main Page UI (based on `main-chat.jpeg`)
- 3 predefined chats on start
- Create new chat (dialog with required first and last names)
- Update existing chat (first and last names)
- Delete existing chat
- Send message (bot replies in 3 seconds with random quote)
- Toast notification when bot replies
- Search for chats

## Additionally
- Login with third-party provider (Google)
- Add confirmation before removing the chat

All features are fully connected to the backend and persist data in MongoDB Atlas.

## Tech Stack

### Frontend

- React (JavaScript)
- HTML, CSS Modules
- Zustand (state management)
- React Hot Toast
- Vite (build tool)

### Backend

- Express.js
- MongoDB Atlas (via Mongoose)

## Installation

### Clone the repository

```bash
git clone https://github.com/oxanamelnyk/chat-with-auto-responce.git
cd chat-with-auto-responce
```

### Install dependencies

```bash
npm install --prefix frontend
npm install --prefix backend
```

## Development

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:5001

## Production Build

```bash
npm run build
```
