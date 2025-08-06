#  TDEE Calculator

A simple full-stack web app that calculates your Total Daily Energy Expenditure (TDEE) based on your personal details and activity level.

Built with:
- **Frontend**: React
- **Backend**: Flask (Python)
- **API Communication**: JSON over HTTP (CORS-enabled)

---

##  Features

- Clean & responsive user interface
- Calculates TDEE using Mifflin-St Jeor formula
- Activity levels from sedentary to very active
- Full stack: frontend + backend

---

##  Preview

> ![screenshot or gif here – optional]

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tdee-calculator.git
cd tdee-calculator

## Backend Setuo (Flask)
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py

## Frontend Setup (React)
cd frontend
npm install
npm start

