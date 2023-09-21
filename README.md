 

# Reg Form

This is a simple Node.js application that allows users to register and view their information.

## Installation

1. Clone the repository.
2. Install the dependencies.
3. Start the server.

## Dependencies
1. In the terminal, enter `npm init -y' 
2. Then in the terminal, enter `npm i ejs express mongoose mongo body-parser'
3. Finally, run `node app` in the terminal to start the server. To see the page you will have to type your ip, followed by :3000. For example 142.0.1.1:3000

## Code Explanation

The code for this application is relatively simple. The main file is `app.js`, which sets up the Express application and defines the routes. The `models/reg.js` file defines the Mongoose schema for the `Reg` model. The `views/index.ejs` and `views/members.ejs` files are the EJS templates for the registration form and the list of registered users, respectively.

The following is a step-by-step explanation of the code:

1. The `app.js` file imports the necessary modules and sets up the Express application.
2. The `app.js` file defines the routes for the application.
3. The `models/reg.js` file defines the Mongoose schema for the `Reg` model.
4. The `views/index.ejs` file is the EJS template for the registration form.
5. The `views/members.ejs` file is the EJS template for the list of registered users.

## Conclusion

This is a simple Node.js application that demonstrates how to use Express, Mongoose, and EJS to create a user registration form.


