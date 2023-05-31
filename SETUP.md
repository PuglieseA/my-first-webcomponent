# Setup

> if you don't have it install the angular cli<br>```npm install -g @angular/cli```

first of all you have to setup an angular project
```
cd ..
ng new my-first-webcomponent
```
Angular elements makes it possible to transform your angular application to a web-component.
please execute therefore the following commands
```
cd my-first-webcomponent
ng add @angular/elements
```
> you will get an error in the terminal but just ignore it

In the next step you need to create a component. which you want to serve.

```
ng generate component the-webcomponent
```
> open the "the-component.component.ts" and change the selector to "the-webcomponent" else you will get an error at the runtime

Now you can deliver the component as a webcomponent like that:

```angularjs
import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TheWebcomponentComponent } from './the-webcomponent/the-webcomponent.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
    declarations: [TheWebcomponentComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [TheWebcomponentComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
    const el = createCustomElement(TheWebcomponentComponent, { injector });
    customElements.define('the-webcomponent', el);
}
ngDoBootstrap() {}
}

```
> please remove the following files:
> * app.component.ts
> * app.component.spec.ts
> * app.component.html
> * app.component.scss

# Build & Deliver

Please install the following packages

```
npm install --save-dev concat fs-extra
```

this two packages will now used to concatenate the js files which angular delivers to one file.<br>
create in the root folder a file named "build-component.js" and fill it with the following code:

```javascript
const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/my-first-webcomponent/runtime.js',
        './dist/my-first-webcomponent/polyfills.js',
        // './dist/my-first-webcomponent/scripts.js', // add only if it gets created
        './dist/my-first-webcomponent/main.js'
    ];

    await fs.ensureDir('dist');
    await concat(files, 'dist/my-first-webcomponent/my-webcomponent.js');
}
build();
```
> That's one way how you can do it. You are free to implement this how you prefer

Add the "build:wc" script to you package.json and call it inside the "build" script

```
{
...
  "scripts": {
    ...
    "build": "ng build --output-hashing none && yarn build:wc",
    "build:wc": "node build-component.js",
    ...
  },
...
}
```

# Embed

create a index.html file in the root folder with the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Testing the Web Component</title>
</head>
<body>
<the-webcomponent></the-webcomponent>

<script type="text/javascript" src="dist/my-first-webcomponent/my-webcomponent.js"></script>
</body>
</html>

```

start the html file with a web server you prefer

> you can use for example serve ```npm install -g serve```

start the webserver and you should see your first webcomponent running

> in case you use serve just execute ```serve``` in the root folder where you created the index.html. <br>your application should be accessable under [http://localhost:3000](http://localhost:3000)
