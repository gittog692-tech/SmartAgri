# 🌾 Smart Agri Intelligence & Supply Chain

🚀 Built during Ignite Hackathon @ GEC Barton Hill  
🏆 Secured **3rd Place**  
👥 Team Nova – Aksha, Archa, Gitto, Sreehari

---

A full-stack web application designed to help farmers make better agricultural decisions and connect directly with buyers, reducing middlemen in the supply chain.

---

## 🎯 Problem

Farmers often struggle with:
- Choosing the right crops  
- Accessing real-time guidance  
- Selling products without intermediaries  
- Awareness of government schemes  

---

## 💡 Solution

This platform helps farmers by:
- 🌱 Recommending crops based on soil, weather, and season  
- 🛒 Connecting farmers directly with buyers  
- 📢 Providing government scheme information  
- 🌦️ Offering weather-based farming advice  
- 👥 Enabling community interaction  

---

## 🔥 Features

### 🌾 Crop Advisor

- Input: Location, soil type, weather, season
- Output: Recommended crops (including hybrid options)
- Weather-based farming tips

---

### 🛒 Market Connect

- Farmers can list crops with price and quantity
- Buyers can browse listings
- “Contact Seller” shows seller details
- Sellers can edit/delete their own listings

---

### 📢 Government Schemes

- PM-KISAN
- Kisan Credit Card
- Crop Insurance
- Detailed descriptions and benefits

---

### 🌦️ Weather Advisory

- Provides farming suggestions based on weather conditions

---

### 👥 Community Page

- Farmers can post queries
- Interaction between users

---

## ⚠️ Backend Status

The frontend is fully functional and accessible.

However, the backend is currently **unavailable** due to free-tier hosting limits (Render).

⏳ It will automatically resume after the next monthly reset.

⚠️ Some features may not function until backend is restored.

💤 Note: When active, the backend may take ~20–30 seconds to wake up.

---

## Installation & Setup

## Prerequisites

- Node.js installed


## 1. Clone the repository

```bash
git clone https://github.com/gittog692-tech/SmartAgri.git
cd SmartAgri
```
## Environment Setup

1. Go to `frontend` folder
2. Copy `.env.example` → `.env`
   
   ```bash
     cp .env.example .env
    ```
3. Update the API URL:

   For local development:
         VITE_API_URL=http://localhost:5000/api

   For production:
         VITE_API_URL=https://your-backend.onrender.com/api


## 2. Setting up the Backend

```bash
cd backend
npm install
npm start
```

The backend server will run on `http://localhost:5000`.

## 3. Setting up the Frontend

Open another terminal and run the following commands:

```bash
cd frontend
npm install
npm run dev
```

The frontend vite server will typically start on `http://localhost:5173`. Open this URL in your web browser.

