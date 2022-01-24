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

        ng serve --port portNumber -o   compiles .ts to .js, bundles them into a pack, hosts them
                                        on a Angular develpment server and luanches the app
                                        on a browser.

        ng build                        compiles .ts to .js, bundles them into a pack, and that
                                        generate bundles are saved in 'dist' folder. we can then
                                        deploy them on to any production web server.

        ng test                         compiles .ts to .js, bundles them into a pack, and then
                                        executes all test cases one by one. 

Data Binding
---------------------------------------------------------------------------------------

    is linking the data or methods held by the component with its html template.

    1. Interpolation

            is rendering the content of a typescript expression into the template

            {{angular-expression}}

            <p>{{greetingStatement}}</p>

            <td>{{a+b+c+d}}</td>

    2. One-Way Binding
        a. attribute binding

            assigning the value of an angualr expression to a html attribute

            [attribute]="angular-expression"

            <table height="100%"></table>
            <table [height]="tableHeight"></table>

        b. event binding

            assinging a method of a component to a event handler.

            (event-directive-name)="method()"

            <button (click)="doSoemthing()"></button>

            Html Event Attributes           Angular Event Directives
            --------------------------------------------------------------
                onclick                         click
                onload                          load
                onblur                          blur
                onfocus                         focus
                onchange                        change
                onmouseover                     mouseover
                ...............
                onsubmit                        ngSubmit

        c. style binding

            assign an angular expression to a css-property

            [style.cssProperty]="angular-expression"

            assign a json object of classes to the 'class' attribute
            
            [class]="{'class-name':true,'class2-name':false......}"

    3. Two-Way Binding

        used to bind a field of the component to a input-element.

        a built-in direcive 'ngModel' is to be applied on the input elements for tow-way data binding

        'ngModel' directive belongs to 'FormsModule' from '@angular/forms'

        [(ngModel)]="field"

        
Pipe
---------------------------------------------------------------------------------------

    1. a pipe is used to transform or format the data jsut before it is rendered.


        inbuilt pipes

            lowercase
            uppercase
            number
            percent
            date
            currency
            json
            async

        custom pipes

            @Pipe({
                name:'',
                providers:[]
            })
            class ToWordsPipe implements PipeTransform{
                transform(value:any,....) any{
                    //
                }
            }

Directives
---------------------------------------------------------------------------------------

    1. Components               
    2. Attribute Directives

            NgClass
            NgModel
            RouterLink
            Click
            DblClick
            MouseOver
            .............etc

    3. Strucutral Directives

        add/remove dom elements

            *ngIf
            *ngFor
            ngSwitch  , *ngSwitchCase

Services
---------------------------------------------------------------------------------------

    is a class that offers bussiness logic like computations/ rest api calls ....etc

    Service are injectable objects. The developer need not crearte a object ot the
    service class, but the angular Injectors will maintain a list of services objects 
    and will supply them to wherever and whenvever needed.

    @Injectable({
        providedIn:'root'
    })
    class MyService{
        .............
    }


    inside a pipe/directive/component / another service .....

            constructor(private serviceObj:MyService){

            }

    Injectors Hirarchy

        every angular resoruce ahs its own injector

        AppModule                   root-injector       will have an object of each service in the app
            Component1                  c1-injector     will have an object of each service that is 
                                                        listed in the providers:[] section of the Component1
            Component2                  c2-injector     will have an object of each service that is 
                                                        listed in the providers:[] section of the Component2
            SubModule1                  sm1-injector
                Component3                  c3-injector
                Component4                  c4-injector

Typescript interfaces
---------------------------------------------------------------------------------------

    an interfaces is a type that can have data memebers and methods-without-implemenation.

    the fields and methods are by default public

    and the fields need not be initialized unlike fields of a class.

    interfaces are very frequently used to define models in angular.

    this facilitates using type-safty for JSON objects.

Parent and Child Components
------------------------------------------------------------------------------

    Parent compnent can pass data through an attribute of a child component

    @Component({
        selector:'app-child',
        ......
    })
    class Child {
        @Input()
        field:type;

        ...............
    }

    <app-child field=""></app-child>

    A child can pass data back to the parent or notify the parent about an action though event-attribues.

     @Component({
        selector:'app-child',
        ......
    })
    class Child {
        @Output()
        eventName:EventEmitter<typeOfData>;

        ...............
    }

    <app-child (evetnName)="eventHandlingFunctionOfParentComponent($event)"></app-child>

    The content of a child can be passed by the parent though <ng-content></ng-content>

RxJS
---------------------------------------------------------------------------

    Reactive JavaScript.

    work with asynchronous programming...

    bgOperation (async code) has to pass info to the fgAppliation like
        1. the periodically generated data if any
        2. error that it might have encountered, or
        3. a signal that the bgJob is done completly.


    Observable
            is a class from 'rxjs'.
            it takes a bgJob and after initiating its execution, the bgJob is observed
            for three events:
                data emition
                error emition
                completion signal
            and the fgApp is notified about these events.

    A background job or an asynchronus job is any fucntion that has
    asynchronous code and must accpet 'Observer' object as param.

    Observer is a class from 'rxjs' and has three methods:
        next(data)      is used to emit values from bgJob
        error(err)      is used to emit errors from bgJon
        complete()      is used to indicate successful completion of the bgJob.

    let bgJob = (observer:Observer) => {
        //asynchornous code and use observer to perform the events.
    };
    
    let ob = new Observable(bgJob);

    //as and when the observable is subscribed the bgJob gets called.
    //this subscription happedn in the fgApp
    ob.subcribe(
        val => {},      //gets executed in response to observer.next(val)
        err => {},      //gets executed in response to observer.error(err)
        () => {}        //gets executed in response to observer.complete()
    );


    rxjs operators
        these are method used to pipe a few more processing to a exiting observable
        and get a new observable.


            ob1: raw ingradiants -> mixes them as soft drink -> outputs a pipeline of bottles
            ob2: a pipeline of bottles -> are labeled -> pipeline of labeled bottles
            ob3: a pipeline of labeled bottles -> collect 10 bottles and seal as a single pack -> pipeline of packs
                .....etc

        map             tranform each ele from old observable into a new ele of the new observable
        filter          filter ele from old observable based on a predicate function, gives anew observable of filtered vals.
        last            to skip all the ele of the old observable and get a new observable having only the last ele.
        tap             not going to change the observable but exeute an acion on once for each ele in the observable.
        ...etc


        let ob1 = generateSeries(lb,ub);
        
        let ob2 =  ob1.pipe(
                        filter(x => x%2==0),
                        map(x => x*x),
                        tap(x => console.log(x)),
                        last()
                    );

Angular LifeCycle Hooks
---------------------------------------------------------------------------------------

    constructor()
    ngOnInit()                          OnInit interface
    ngOnChanges()                       OnChanges interface
    ngDoCheck()                         DoCheck interface
        ngAfterContentInit()            AfterContentInit interface
        ngAfterContentCheck()           AfterContentCheck interface
        ngAfterViewInit()               AfterViewInit interface
        ngAfterViewChecked()            AfterViewChecked interface
    ngOnDestroy()                       OnDestroy interface


        ngOnChanges()	        Respond when Angular (re)sets data-bound input properties. 
                                The method receives a SimpleChanges object of current and previous property values.
                                Called before ngOnInit() and whenever one or more data-bound input properties change.

        ngOnInit()	            Initialize the directive/component after Angular first displays 
                                the data-bound properties and sets the directive/component's input properties.
                                Called once, after the first ngOnChanges().

        ngDoCheck()	            Detect and act upon changes that Angular can't or won't detect on its own.
                                Called during every change detection run, immediately after ngOnChanges() and ngOnInit().

        ngAfterContentInit()	Respond after Angular projects external content into the component's view.
                                Called once after the first ngDoCheck().

        ngAfterContentChecked()	Respond after Angular checks the content projected into the component.
                                Called after the ngAfterContentInit() and every subsequent ngDoCheck().

        ngAfterViewInit()	    Respond after Angular initializes the component's views and child views.
                                Called once after the first ngAfterContentChecked().

        ngAfterViewChecked()	Respond after Angular checks the component's views and child views.
                                Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().

        ngOnDestroy	            Cleanup just before Angular destroys the directive/component. 
                                Unsubscribe Observables and detach event handlers to avoid memory leaks.
                                Called just before Angular destroys the directive/component.

HttpClientModule
------------------------------------------------------------------------------------------------

    is used to consume or talk to a rest-api.

    HttpClient  Service
        get(restEndPoint)   : Observable<T>
        delete(restEndPoint)   : Observable<Void>
        post(restEndPoint,reqeustBody)   : Observable<T>
        put(restEndPoint,reqeustBody)   : Observable<T>

json-server
-------------------------------------------------------------------------------------------------

    a json-server is a javascript tool that takes a '.json' file as database and
    generates fake rest-api on the entities in the given '.json' file.

    npm install json-server --save

    json-server --port 8888 --watch data.json

    

