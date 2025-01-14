# Overview

This is a standard react application scaffolded with vite and uses tailwind to help with styling

Live app is available here: 


## Project Structure Highlights

- services -> contains the application state and majority of the business logic, within hooks, contexts and custom utility functions
- modules -> primary components used to display the web app, each module compartmentalized each component and related components are kept together. Global components are kept in core folder within modules folder
- mocks -> used for unit testing


## Commands:

- npm run dev -> runs app locally
- npm run build -> creates production build

## Features
- filtering is fully functional via the filters component
- artists can be searchable both in the search bar and in the filters
- search bar allows users to enter relevant queries by entering a query and clicking the search icon


## Application secrets

- for local development, you can create .env.local file and add the discog keys needed to call the discog api. This will not be saved in github and in AWS is setup as env variables for security

