# Search-Repositories-App
App built with React and Express that queries Github's API for Repositories.

This is a very simple application that allows users to query the Github repository search API by typing into a textbox and clicking submit. 
The user will then see the results of their query and can select individual repositories to view more detailed information about them.

[![LinkedIn][linkedin-shield]][linkedin-url]

### Built With
* [React](https://reactjs.org/)
* [Express](https://expressjs.com/)

## Starting the application

To make this application easy to start up with as little hassle as possible, the `npm-run-all` package is utilized to start the client and server with a single command.

### Installation

1. Clone the repo
```sh
git clone https://github.com/JeremyDahms/Search-Repositories-App.git
```
2. Install NPM packages
```sh
npm install
```
3. Start client and server
```sh
npm run dev
```
The React client is served to Port 8080 via `webpack-dev-server`.

The `express` API listens on Port 9000.

## Usage
The user first comes upon a screen with a single input element with an accompanying submit button.

To search Github repositories, enter a query into the input element and click submit.

You will see the results of your query under the input element.  Currently, only 30 results are shown for a given query.

Click anywhere on one of the results to navigate to the details page for that repository.

When on the Details Page, the only interactive element is the "Return to search page" link.  Clicking this will bring you back to the search page where you started. 

## Future Changes
### Pagination
To display the full results of a query, some form of pagination or infinite scrolling will need to be implemeneted.  

The current number of 30 results is the default returned from Github and is enough to showcase functionality but not enough to be have any real value.

The number of results returned from a single request can be increased up to 100 with the `per_page` query parameter.

If the number of matches is over 100, pagination is a good solution.

This can be accomplished by implementing a pagination component for the results table, and requesting results by page number.

To request for a given page a results, the `page` query parameter may be added to the Github request.

### Back Button
The "Return to seach page" link in the Details Page returns to the search page but all of the query results are gone and must be search for again.

One solution could be to use a application state management library such as Redux to store the current search query so that, when the user navigates back to the search page, 
the Express API will automatically be queried for the cached results and the user can pick up where they left off.  The search results could also be stored in the global state 
if that would be more desirable than calling the server again.

## Additional Information

This application is built with the assumption that any users will already know that they will be entering a query to search repositories on Github. 

This allowed for a cleaner design where the user is prompted by the placeholders in the input elements and by the hover effects on certain elements.

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jeremydahms
