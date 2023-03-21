# todo APP

### netlify link- https://rajashekarmandatodoapp.netlify.app/

### Github Link- https://github.com/Rajashekarmanda/todosApp.git

### figma-todo - https://www.figma.com/file/SClDA1weEGA3Mo8Is8Sbf2/todo?node-id=0-1&t=PXUdB6qboaGptbLX-0

# Folder Structure
    
    -----> # src
                |
                #-->func.js
                |
                #-->app.js
                |
                #-->index.html
                |
                #-->style.css
                |
    -----> # README.md
                |
    -----> # package-lock.json
                |
    -----> # package.json
                |

* Main app logics & handling event litseners are written in app.js
* Some functionalities written like after clicking active & completed button have to perform some tasks.
* Run server on index.html if you open .js file and try to run a server it will give error. So try to run server by open index.html file only.

# Used parcel-bundler third party package for bundling all JS modules & run server on PORT - localhost:1234 enter "npm run start" to start server.
* You can install if you need by entering ----> npm init -y  
*                                               npm install --save-dev parcel-bundler
*                                               npm run start (open index.html file and run this command)

* Added .gitignore to ignore files on github

## added event litseners to Each button perform particular task.
* add-button
* clear-button
* delete-button (icon)
* task buttons (all & active & completed) 

* input field will store the task title(user entered) and available to cretae element with that textContent.

* Used remove() method to remove elements. And used visibility:hidden css-property to hide/un-hide elements.
 
### User Interface of todo 

<a href="resource/Screenshot from 2023-03-21 16-06-22.png">### @User Interface of todo App Link</a>
