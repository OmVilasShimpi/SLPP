# Shangri-La Petition Platform (SLPP)

## Overview
The **Shangri-La Petition Platform (SLPP)** is an interactive web application that enables citizens to create, manage, and support petitions. Additionally, it provides an administrative interface for monitoring petition activities, setting thresholds, and addressing submitted petitions.

## Pre-Requisites
To run the SLPP, ensure that you have the following installed:

### Required Software
- Python version 3.8 or later
- Flask framework
- SQLite for database handling
- (Optional) Postman for API testing

### Required Python Libraries
Install the necessary dependencies using the following command:
```bash
pip install flask flask_sqlalchemy flask_bcrypt flask_login requests
```

## Tools and Technologies
### Backend:
- **Flask** - Handles routing and backend logic.
- **SQLAlchemy** - Object Relational Mapper (ORM) for database operations.
- **SQLite** - Lightweight database for structured data storage.
- **Flask-Bcrypt** - Secure password encryption.
- **Flask-Login** - User session and authentication management.

### Frontend:
- **HTML/CSS**
- **JavaScript**
- **Bootstrap** - For responsive design

### Database:
- **SQLite** - Used for structured data storage.

### Additional Tools:
- **Postman (Optional)** - For API testing.

## Database Initialization
If the database needs to be set up, execute the following commands:
```bash
flask shell
```
```python
from app import db
db.create_all()
exit()
```

## Running the Application
To start the application, run:
```bash
python app.py
```
Once running, open your browser and navigate to:
```
http://127.0.0.1:5000/
```

## Features
### For Petitioners:
- **User Registration**: Sign up with email, name, date of birth, password, and a valid BioID. The system verifies BioIDs against a predefined list.
- **Login**: Secure login using registered credentials.
- **Petition Management**:
  - Create petitions with a title and content.
  - Browse all petitions on the platform.
  - Sign petitions created by others.

### For Administrators:
- **Admin Login**: Access via pre-set admin credentials.
- **Petition Management**:
  - View and monitor all petitions with detailed information.
  - Respond to and close petitions.
- **Threshold Settings**: Adjust the minimum number of signatures required for petitions to warrant a response.

## API Endpoints
The platform provides RESTful API endpoints for various operations:
- **Retrieve open petitions:**
  ```
  GET http://127.0.0.1:5000/slpp/petitions?status=open
  ```
- **Retrieve all petitions:**
  ```
  GET http://127.0.0.1:5000/slpp/petitions
  ```
- **Retrieve petition signatures:**
  ```
  GET http://127.0.0.1:5000/api/petitions/5/signatures
  ```

## File Structure
```
SLPP/
│── app.py                 # Core application logic and route definitions
│── test_register.py        # Automated test cases for user and admin functionalities
│── database.db             # SQLite file for storing users and petitions
│── templates/              # HTML templates for the UI
│── static/                 # Static assets (CSS, JavaScript files)
```

## Testing
### Automated Testing
Run the test script with the following command:
```bash
python test_register.py
```
Ensure that `app.py` is running when executing the test script.

### Testing with Postman
Use the provided API endpoints to test various functionalities of the application.

## Known Issues
- Keep the `VALID_BIO_IDS` list updated.
- Ensure both email addresses and BioIDs are unique for all users.

## Key Notes
- Verify that port `5000` is available for the application to run smoothly.
- Install all required dependencies before launching the program.

## Author
Developed by **OM VILAS SHIMPI**

