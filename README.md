# Crawler
Monorepo project of an application for scraping data from specific products for the drugstore Drogasil.

This application consists of an API that scrapes data and a frontend for consuming the information.

Typescript was used as the main language for the API in Node.js and the frontend in React Vite.

## Documentation
The API has public [documentation available](https://documenter.getpostman.com/view/32699685/2s9YythMFD) via postman documentation.

## To start app
Docker was used to serve the complete application and is the only requirement.

Each application will be available and exposed on a port on localhost.

## Start the app

To start the development server run `docker compose up`. Open your browser and navigate to http://localhost:4200/ or http://localhost:3000/.

## Using WSL2
If you are using WSL2 to run the project and do not have docker desktop installed on your Windows host, uncommenting the lines corresponding to network_mode for the host in [docker-compose](./docker-compose.yaml), this may impact the exposure of ports on localhost.

## Scripts
Scripts for automated tests were made available in [package.json](./package.json)

For backend testing
```
npm run test:backend
```
To start the backend
```
npm run start:backend
```
To start fronted
```
npm run start:frontend
```