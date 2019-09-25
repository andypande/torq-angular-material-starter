# Angular Material Torq Theme Project

This is a starter project to help you get started with Angular Material and the Torq Design System. The project is built using the [Angular CLI](https://cli.angular.io/) and [Google Angular Material](https://material.angular.io/)

## What's Included

This project contains a few basic components (Material Toolbar, Material Sidemenu, Material Card, Material List, Material Icons, Material Button) to help you get started with an Angular Material Project with Torq Implemented. The project also contains the Torq colors & fonts and some SASS styles to make the Material components look like Torq Components. 

The project is defaulted to show the UI in Torq Light Theme. If you want to switch over to the Dark Theme, navigate to the app.component.ts file and change the lightTheme variable from true to false. 

![Shows How Project Looks on Startup](https://i.imgur.com/NHVmEcz.jpg "Shows How Project Looks on Startup")

## How to start using the Starter Project

It is recommended that you Fork this project or clone it into your local to start development. You will also need to open a new repository with the downloaded code once you start adding new components to the project. 

## How to Run The Project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Steps for Importing a New Material Component

1. Find the Component you wish to import at [Angular Material Website](https://material.angular.io/components/categories)
2. Ensure the component you are importing is added into the app.module.ts file
3. Navigate to the app.component.html file to add the Material Component into your HTML code
4. **Make sure you follow the Angular Material guidelines for how to theme your imported components**
... For example, you will see that in the current application code there is a color property applied to every component. Ex: <mat-toolbar color="surface">. Similarly, you must use the [Torq Developer Guidelines](http://guidelines.torq.design) to ensure you are putting the right color on each of the components. For reference, the Torq project colors are as follows:
    
    | Theme Style   | Color      | Hex Value  |
    | ------------- |----------  | ----------|
    | Light UI      | Primary    | #508be4 (Torq Blue) |
    | Light UI      | Secondary  | #f7f7fb (Torq Light Blue) |
    | Light UI      | Background | linear-gradient(#F7F9FB, #D6DFEC)  |
    | Light UI      | Surface    | #ffffff (White) |
    | Dark UI       | Primary    | #508be4 (Torq Blue) |
    | Dark UI       | Secondary  | #141e27 (Torq Dark Blue) |
    | Dark UI       | Background | linear-gradient(#1A2633, #101820) |
    | Dark UI       | Surface    | #1D2E40 |

**Please do not overwrite color properties for individual components in your SCSS, SASS, CSS files. Instead, try to apply the Angular Material Theming properties to the individual components. Please do not overwrite the styles in the torq-theme.scss file either.**

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

Reach out to the Torq team on the #torq slack channel or navigate to [Torq Guidelines](http://guidelines.torq.design)



Need some guidelines for Dark Theme Versus Light Theme
Seperate out the SCSS file into custom CSS for each of the different Material Components 