
https://github.com/user-attachments/assets/31e15147-6496-470d-804b-159d7615b097
# ChatFusion

ChatFusion is a real-time chat application enabling seamless communication between authorized users. Users can search for others, view online status, and engage in live chats, all in a secure and interactive environment powered by Socket.io.

#Screenshots
![Screenshot (17)](https://github.com/user-attachments/assets/ccc2abba-fcd8-42e4-9f71-565ac958b612)
![Screenshot (18)](https://github.com/user-attachments/assets/40f80256-0385-43f7-bcf5-12ad87adc691)

#Video
https://github.com/user-attachments/assets/9b41f325-6165-44bf-8cf4-ec49082eefab


## Features

- **Real-Time Messaging**: Instant messaging with Socket.io for live chat.
- **User Authentication**: Secure login and registration for authorized users.
- **User Search**: Find other users easily with the built-in search function.
- **Online Status**: View online/offline status of other users.

## Demo

Check out the live demo: [ChatFusion Demo](https://chatfusion-mt8f.onrender.com/)
## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express, Socket.io
- **Database**: MongoDB
- **Depolyed**: Render 

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/000sami000/ChatFusion.git
   cd ChatFusion
   
2. **Install dependencies**
   ```bash
   npm install
3. **Environment Variables**

   Create a `.env` file in the backend root directory and add the following:

   ```plaintext
   PORT=5000                               # Backend port
   MONGO_DB_LOCAL=mongodb://localhost:27017 # Local MongoDB URL
   MONGO_DB_URI=your_remote_mongodb_uri     # Remote MongoDB URI
   JWT_SECRET=your_jwt_secret               # JWT secret for authentication
   CLOUDINARY_CLOUD_NAME=your_cloud_name    # Cloudinary cloud name for image storage
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   NODE_ENV=development                     # Environment
   ORIGIN=http://localhost:5173             # Frontend URL for CORS in local development 
4. **Run the application**
  Start the backend server:
   ```bash
   cd  backend
   npm start
  Start the frontend:
   ```bash
   cd frontend
   npm start

