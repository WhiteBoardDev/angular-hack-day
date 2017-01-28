# AngularHackDay

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26. It was written in a few hours in order to experiment with angular 2 during google's angular hack day event.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Pipes

Pipes are used as you would imagine. Pipe raw data into helper methods like `currency` or `fulldate`

    <div>{{ myAmount | currency }}</div>
    <div>{{ myObject | json }}</div>
    <div>{{ today | date:"dd/MM/yyyy" }}</div>

# Content vs View

  <picture-frame>  //view
    <img src="blah" //content
  </picture-frame>

  because the template of picture frame has

  <div class="picture-frame">
    <ng-content></ng-content>
  </div>



  Also content rendering can be more selective from the template point of View

  <div class="photo">
    <ng-content select="img"></ng-content>
    <ng-content select=".caption"></ng-content>
  </div>


  This component selects any content is an img type and renders that at the top, followed by any element that has the class "caption"

# Lifecycle hooks

Your component can be alerted when particular lifecycle events happen. Do this by implementing an interface
for example "onInit" and override the method.

Types of lifecycle events

1. onChanges
2. onInit
3. DoCheck //warning this will remove the default change detection behavior
4. AfterContentInit
5. AfterContentSet
6. AfterViewInit
7. AfterViewChecked
8. OnDestroy


some are run on each round of change detection
1. onChanges
2. DoCheck
3. AfterContentChecked
4. AfterViewChecked

Change detection starts at the root component for each detectin. This is atop down approach and only done once.
Make sure to not have a change in the child does not make a change in the parent. This will cause interesting bugs because the parent wont be
updated when it should be.


# Routing

Use the router directives in anchor tags.

  <a routerLink="/myroute"> link </a>

Use the router module to define the routes in the module

    const routes: Routes = [
     { path: '', }

    ]

    RouterModule


# Forms

YAY
two ways to do Forms
1. Template driven Forms
2. Model driven Forms

Angular comes with a from module

ngModelGroup directive will automatically create nested form objects

    <form #registerForm="myform">
        <input name="email" ngModel/>
        <div ngModelGroup="address">
          <input name="street" ngModel/>
          <input name='zip' ngModel/>
        </div>

    </form>


The form object can then be accessed in the component


    export class RegisterComponent {

      @ViewChild(NgForm) registerForm: NgForm;
    }


You can also write custom validators!!!


# Two way data binding

Use the banana in a box syntax


## Resources

vsavkin.com
angularconnect.com
goo.gl/dfG3hX

# Angular vs Angular JS

Whats new?

1. Improved performance
2. full stack


Ahead of Time (AOT) Compilation
Angular 1 everything happens at runtime because the browser actually compiles in the BrowserModule

Now, in angular2 the code is compiled and built for the browser


1. ES 2015 and beyond
  a. classes
  b. modules
  c. decorators
2. typescript (but optional)
3. Bundlers
  a. systemjs
  b. webpack
  c. rollup
  d. closure
4. PWA (progressive web apps)

NG upgrade provides an adaptor which is backward and forward compatible with angularJs and angular


# RX JS

stream processing framework?
For use with observables in the code and async stuff
