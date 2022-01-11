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
        ES6 Modules

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

Angular 11 Archetecture
-----------------------------------------------------------------------------------------------------

    1. Any angular resource is a typescript class, marked by a specific decorator.
    2. The configaration of each of resoruces is supplied as a JSON object to the decorator and is called meta-data

    Module
                    1. Angular Module is a group of components,directives,pipes,services and other angular module.
                    2. Angular Modules are different from ES Modules.
                    3. ES Modules are physical (Each file is a spearate ES Module), but Angular
                        Modules are logical, they are objects of a Module Class
                    4. Each angular app msut have one and only one ROOT MODULE, and that ROOT MODULE will
                        contain everything needed by the APP.
                    5. The sub-modules contaiend in the root-module are called feature-modules

                    AppModule                               root module
                        |- HomeComponent
                        |- HeaderComponent
                        |- FooterComponent
                        |- SalesModule                      feature module
                            |-CartComponent
                            |-BillingComponent
                        |- InventoryModule                  feature module
                            |-AddItemToStockComponent
                            ........

                    @NgModule({
                        declarations:[
                            //list of components, pipes and directives that belong to this module
                        ],
                        imports:[
                            //list of feature modules that are nested in the current module
                        ],
                        exports:[
                            //list of components, pipes and directives that belong to this module, and
                            //that are allowed to be accessed out side this module
                            //this property is not used in Root-Module
                        ],
                        providers:[
                            //list of services,guards and interceptors
                        ],
                        bootstrap:[
                            //is used only in the root-module
                            //we put the list of components that msut be instatiated immediatly
                            //after the root-module is loaded 
                        ]
                    })
                    class ModuleName {

                    }
    Component
                    1. Angular allows us to extend HTML, we can create our own HTML elements and HTML attributes.
                    2. A Component is a custom HTML element.
                    3. The tag-name of a component is given in its 'selector' property.
                    4. Each compoent has a template that dictates what is to be renderd on the screen when the tag is used.

                    app-header.component.html
                        <app-today></app-today>
                        <h3>{{title}}</h3>

                    app-header.component.ts
                        @Component({
                            selector:'app-header',
                            templateUrl:'app-header.component.html',
                            providers:[]
                        })
                        class HeaderComponent{
                            title:string;

                            constructor(){
                                this.title="My First Web";
                            }

                        }

                    <app-header></app-header>      =====  <h3>My First Web</h3>

    Directive
                    1. Angular allows us to extend HTML, we can create our own HTML elements and HTML attributes.
                    2. A Directive is a custom HTML attribute.

                    @Directive({
                        selector:'highlight',
                        providers:[]
                    })
                    class HighlightDirective{
                        //what should the directive change on its hsot-element
                        //is programmed here....     
                    }

                    <p highlight></p>

    Pipe
                    1. a pipe is used to transform or format the data jsut before it is rendered.

                    @Pipe({
                        name:'',
                        providers:[]
                    })
                    class ToWordsPipe{

                    }

    Service
                    1. provide bussiness logic or validations or rest-api calls

                    @Injectable({
                        providedIn:'root'
                    })
                    class EmployeeService{

                    }
    
Angular CLI
------------------------------------------------------------------------------------

    Angular Command Line Interface , is a tool used to mange and work
    with the angular project with more ease.

    ng --version

    ng new proj-name                creating a new angular project

    cd proj-name

        ng g module module-name 
        ng g component component-name 
        ng g pipe pipe-name 
        ng g directve directive-name 
        ng g service service-name 
        ng g guard guard-name 
        ng g interceptor interceptor-name 
        ng g interface model-name 
        ng g class class-name 

        use '--skipTests' flag with the 'ng g' command to avoid the auto-generated test case files.

        ng serve --port portNumber      compiles .ts to .js, bundles them into a pack, hosts them
                                        on a Angular develpment server and luanches the app
                                        on a browser.

        ng build                        compiles .ts to .js, bundles them into a pack, and that
                                        generate bundles are saved in 'dist' folder. we can then
                                        deploy them on to any production web server.

        ng test                         compiles .ts to .js, bundles them into a pack, and then
                                        executes all test cases one by one. 




        