# N1 Question and Answer 
### What is the node_modules folder, and why is it not included when you submit or share a project? 

### answer: 
#### We all know that downloading any packages or library with npm create a node_modules folder where it store and tracked any external module or packages and their dependecies we installed for our nodejs project.

### And the reason why is it not included when submitting your project is because it can be installed again using npm install, it  will created for you based on the package.json and package-lock files we already have and also excluding this folder helps reduce project size considering the storage it take 
