# NsBootstrapIcon

## Usage

### Install using npm
```shell
npm install ns-bootstrap-icon
```

### Add lib assets to project assets array
```
"architect": {
  "build": {
    "builder": "@angular-devkit/build-angular:browser",
    "options": {
      ...
      "assets": [
        ...
        {
          "glob": "*.svg",
          "input": "./node_modules/ns-bootstrap-icon/assets",
          "output": "./assets/"
        }
      ],
      ...
    }
  }
}
```

## Build

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

Run `npm run build:lib` to build the project. The build artifacts will be stored in the `dist/ns-bootstrap-icon` directory.

## Sample Project

The sample project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
