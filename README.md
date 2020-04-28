
## PreRequisites

1. NodeJS
2. Angular CLI

## Init projects

```shell
ng new app-ui
npx express-generator --no-view app-server
```

## Angular Codebase

1. Add bootstrap
2. Create an omdb service

## Express

## Packages user

1. Express
2. Nodemon
3. Axios

# Scope of Project 

1. Search Page
2. Result Page

## Terms

1. API -> Application Programming Interface
2. HTTP -> Hyper Text Transfer Protocol
3. Rest -> Representational State Transfer

## Function call happening over http
1. function reference -> input -> output
2. url ( GET, POST, PUT, DELETE, etc. ) -> json, url parameters -> json, xml, html

Has a Request and Response

## Js Terms

1. NodeJS -> Javascript runtime
2. NPM -> Node Package Manager

## Project Architecture

Angular Application ( UI ) -> 
1. Search Page ( User will enter a title ) -> Search based on that title -> Display the results.
2. Result Page ( Clicks on a particular result ) -> Show specific information about that movie.

UI -> Our Backend -> OMDB Backend 
- Middle Layer between UI and OMDB server

## Steps 

1. Create template project
2. remove var. replace with const. ( Because of hoisting )
3. Problem with express

// Passport library

## Common Interview Questions

### Angular

1. Services ( singletons, dependency injection ), Components ( view + behviour ), Modules
2. Input and Output ( How do parent and child components communicate )
3. Lifecycle Hooks ( OnInit, OnDestroy, OnChanges ( It gets called once initially and then will get called when input from parent changes ) )
4. Observables Subjects ( pub sub )
5. Directives, Pipes
6. Typescript ? What and why? 
7. SCSS ? What and why?  

### Javascript

1. setTimeouts()
2. == vs ===
3. Variable Hoisting
4. Scoping rules
5. prototypal inheritance

function Person(name, age) {
    this.name = name;
    this.age = age;
}
var a = new Person("John", 12)


### Node

1. Middlewares
2. Connecting to databases
3. Authentication 
