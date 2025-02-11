Shangri-La Petition Platform (SLPP)
Overview
The Shangri-La Petition Platform (SLPP) is an interactive web application designed for citizens
to create, manage, and support petitions. Additionally, it features an administrative interface for
monitoring petition activities, setting thresholds, and addressing submitted petitions.
Pre-Requisites
To run the SLPP, you will need the following:
• Python version 3.8 or later
• Flask framework
• SQLite for database handling
• Optionally, Postman for API testing
Additionally, ensure the following Python libraries are installed:
• flask
• flask_sqlalchemy
• flask_bcrypt
• flask_login
• requests
Tools and Technologies
Backend:
• Flask: Handles routing and backend logic.
• SQLAlchemy: Object Relational Mapper (ORM) for database operations.
• SQLite: Lightweight database for data storage.
• Flask-Bcrypt: For secure password encryption.
• Flask-Login: Manages user sessions and authentication.
Frontend:
• HTML/CSS
• JavaScript
• Bootstrap framework for responsive design
Database:
• SQLite for structured data storage.
Additional Tools:
• Postman (optional) for testing API endpoints.
Database Initialization
If database setup is required, execute the following commands:
flask shell
>>> from app import db
>>> db.create_all()
>>> exit()
Running the Application
Start the application using the following command: python app.py
Once running, open your browser and navigate to: http://127.0.0.1:5000/
Features
For Petitioners:
• User Registration: Users can sign up with their email, name, date of birth, password, and
a valid BioID. The system verifies BioIDs against a predefined list.
• Login: Users log in securely using their registered credentials.
• Petition Management:
o Create petitions with a title and content.
o Browse all petitions on the platform.
o Sign petitions created by others.
For Administrators:
• Admin Login: Access through pre-set admin credentials.
• Petition Management:
o View and monitor all petitions, including detailed information.
o Respond to and close petitions.
• Threshold Settings: Adjust the minimum number of signatures required for petitions to
warrant a response.
APIs
• Provides RESTful API endpoints for operations such as petition listing, details, and
signature retrieval.
• Includes open API endpoints for public use.
File Structure
• app.py: Core application logic and route definitions.
• test_register.py: Automated test cases for user and admin functionalities.
• database.db: SQLite file for storing users and petitions.
• templates/: HTML templates for the user interface.
• static/: Folder for static assets such as CSS and JavaScript files.
Testing
• Automated Testing: Run the test script with the following command:
python test_register.py
Ensure that app.py is running when executing the test script.
• Testing with Postman: Use the following sample API endpoints:
o GET: http://127.0.0.1:5000/slpp/petitions?status=open
o GET: http://127.0.0.1:5000/slpp/petitions
o GET: http://127.0.0.1:5000/api/petitions/5/signatures
Known Issues
• Keep the VALID_BIO_IDS list updated.
• Ensure both email addresses and BioIDs are unique for all users.
Key Notes
• Verify that port 5000 is available for the application to run smoothly.
• Install all required dependencies before launching the program.
