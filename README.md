# todo APP

# netlify link- https://todoapprajashekarmanda.netlify.app/

# Github Link- https://github.com/Rajashekarmanda/todosApp.git

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

# Used parcel-bundler third party package for bundling all JS modules & run server on PORT - localhost:1234 to you enter "npm run start"
* You can install if you need by entering ----> npm init -y
*                                               npm install --save-dev parcel-bundler
*                                               npm run start (open index.html file and run this command)

* Added .gitignore to ignore files on github

## added for Each button event litseners to perform particular task.
* add-button
* clear-button
* delete-button (icon)
* task buttons (all & active & completed) 

* input field will store the task title(user entered) and available to cretae element with that textContent.

* Used remove() method to remove elements. And used visibility:hidden css-property to hide/un-hide elements.

# Have to add more features like - To Add taskItems into localstorage it will stay after BrowserPage refresh also. 




