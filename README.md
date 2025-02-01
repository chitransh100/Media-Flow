# MediaFlow using React & Redux

## 📌 Project Overview
This project is built using **React** that fetches data from the **YouTube API** to display a list of videos, provide a responsive search experience, and allow users to interact with video content efficiently.

## 🚀 Features
### 1️⃣ **Video Listing & Search Functionality**
- Implements a **responsive search bar** with **search suggestions** similar to YouTube.
- Enhances search speed using **caching** (search query results are stored in a Map for faster access).

### 2️⃣ **Video Playback Page**
- Clicking on a video opens a dedicated **video playback page**.
- Displays **video details**, including **subscribers count** and **views**.

### 3️⃣ **Nested Comment Section**
- Supports **N-depth commenting**, allowing users to reply at any level.
- Provides a structured discussion experience.

### 4️⃣ **Performance Optimization**
- Implemented **caching logic** to store searched query data for faster retrieval.
- Uses **React-Redux** for efficient state management.

## 🛠️ Technologies Used
- **React** (Component-based UI development)
- **Redux** (State management)
- **React Router** (Routing & navigation)
- **YouTube API** (Fetching video data)
- **CSS** (Responsive UI design)

## 🏗️ Setup Instructions
### 🔹 Prerequisites
- Node.js installed
- Git installed

### 🔹 Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project folder:
   ```sh
   cd your-repo-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open **http://localhost:3000/** in your browser.

## 📂 Project Structure
```
📁 src
 ┣ 📁 components       # Reusable UI components
 ┣ 📁 pages            # Main application pages
 ┣ 📁 redux            # Redux store & slices
 ┣ 📁 utils            # Helper functions
 ┣ 📜 App.js           # Main App component
 ┣ 📜 index.js         # Entry point
```

## 🌟 Future Enhancements
- **User Authentication** (Sign-in/Sign-up functionality)
- **Like & Dislike System** for videos & comments
- **Dark Mode Toggle** for a better UI experience

## 📜 License
This project is open-source and available under the **MIT License**.

---

🚀 Happy Coding! 🎥🎶

