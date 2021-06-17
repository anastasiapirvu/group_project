# fspt5-team2

## Holly's tips for setting up the API
- Sign up for a free API key from https://spoonacular.com/food-api
- Create  a .env in client directory
- insert this into .env: REACT_APP_API_KEY=*your API key*
- Restart the server if neccesary (using Yarn Start)





## CREATING THE TABLE (Kat)

- Create .env in root directory, with:
- DB_HOST=localhost
- DB_NAME=shoppingList
- DB_USER=
- DB_PASS=


- Create database called shoppingList (watch capitalisation)
- in mysql, type - ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOURPASSWORD';  (Replace YOURPASSWORD with your actual password)
- In the terminal, in the main folder, run node model/database.js
