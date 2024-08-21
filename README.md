To run this application: (ensure that you have Python and node.js installed on your machine)

To Run the Django Backend:
1. Clone the repository to your device.
2. Open command prompt, and navigate to the root folder of this project.
3. Create a virtual environment (Windows command: 'py -m venv *insert name of environment here*'  || Unix/Mac command: 'python -m venv *insert name of environment here*' )
4. Activate the virtual environment (Windows command: '*name of environment*\Scripts\activate.bat' || Unix/Mac command: 'source *name of environment*/bin/activate' )
5. Install django (command: 'pip install django')
6. Install django's api packages (command: 'pip install djangorestframework django-cors-headers')
7. Navigate to /back-end/django-api in this project.
8. Run the django server (command: 'python manage.py runserver').
9. The server should now be running. It opens to the address "http://127.0.0.1:8000" on my machine, but your command prompt will show you the address that it runs on for you.
10. If you want to view the endpoints, the two functional ones are "http://127.0.0.1:8000/api/recipes" and "http://127.0.0.1:8000/api/users".

To Run the React Frontend:
1. In a seperate terminal from the backend, navigate to the ./front-end folder within this project.
2. Run 'npm i' to install all necessary dependencies.
3. Once all dependencies are installed, run "npm start" to run the front-end.
4. Assuming the back-end is already running on your machine, the application should be fully functional.
