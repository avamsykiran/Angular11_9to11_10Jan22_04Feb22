Angular 11 Pre-requsite Skill
------------------------------------------------------------------

    HTML 5
        Form Elements and Validations
        Web Storage
        Geo Location
        Web Workers

    CSS 3
        Selectors
        CSS Properties
        Responsive Design

    Bootstrap 5 (optional)

    Javascript (ES6)
        Basic JS Objects liek String,Date,Math,Window,Document ..etc
        Both ClientSide and ServerSide scripting
        JS DOM Manipulation
        Array Prototype Methods
        Classes, methods,this and static keywords
        setTimeout,setInterval,Promise, async and await keywords
        cosnt, let and var
        Callbacks, prototypes, closure, arrow functions

    NodeJS
        npm
        dependency management ..etc


Lab Setup
--------------------------------------------------------------

    VSCode      IDE             https://code.visualstudio.com/download

    NodeJS      DevPlatform     https://nodejs.org/en/

                                node --vesion

    Angular CLI DevTool         npm install -g @angular/cli

                                ng --version

    Chrome      Browser

Angular 11
--------------------------------------------------------------

    it is a javascript based SPA framework.

    DWA (Dynamic Web Application) ?

        WebServer                                                              Client

            Controllers + Views <------------REQ1 (URL) ---------------------  
            (Servlet + JSP)     ----View renders HTML, (HTML+JS+CSS) RESP--->   loads the html freshly on DOM
            (ASP.NET)           <------------REQ2 (URL) ---------------------   by submiting a form, clicking a link...
            (Python) ..etc      ----View renders HTML, (HTML+JS+CSS) RESP--->   the previous page has to unload
                                                                                and the current resp contetn
                                                                                loads the html freshly on DOM


    SPA (Single Page Application) ?

        WebServer                                                              Client

            SPA Bundle              <------------REQ1 (URL) --------------------- 
            (index.html + JS + CSS) ------------Whole SPA Bundle RESP-----------> The received index.html is loaded
                                                                                    into the DOM, and the 
                                                                                    JS is executed on the client

                                                                                form submitions, clicking links are all
                                                                                handled on the client by the
                                                                                JS. And the JS can generated the 
                                                                                neede html on the client and can
                                                                                replace any protion of the index.html
                                                                                with the generated ones.

        BackEnd Server (Application Server)

            SOAP / Restful webservice             <----------- req----------- JS will req for data retrival/ storage
                                                                                async..ly time to time.

                                            -------.xml/.json (Resp)---------> JS will receive the data and prints it
                                                                                on index.html
    SPA frameworks

        AngularJS
        Angular
        ReactJS
        VueJS
        ...etc

    AngularJS vs Angular


        AngularJS can be consumed in Javascript only.

        Angular is the next version of AngularJS, from Angular2,Angular4,Angular5.....Angular11, and here
        the Angular can be consumed in Typescript and Javascript.


    Typescript vs JavaScript

        Typescript = Javascript + Typesafty.   

        typescript is not supported by any browser, hence typescript must be
        compiled (transpelled) to JS using a compile like babel


        Javascript

            function f1(userName){
                return userName + ' is of length ' + userName.length() + ' chars';
            }

            f1('Vamsy');        //no problem
            f1(12334567);       //raise a runtime error says .length is not a method

        Typescript

            function f1(userName:string) : string {
                return userName + ' is of length ' + userName.length() + ' chars';
            }

            f1('Vamsy');        //no problem
            f1(12334567);       //a compile time error occurs, type mismatch expecting a string