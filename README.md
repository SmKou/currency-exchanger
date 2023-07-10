# Currency Exchanger

By: Stella Marie

Demo app for using api calls.

View on [Github Pages](https://smkou.github.io/currency-exchanger/)

## **Technologies Used**

- HTML5
- CSS3
- Skeleton 2.0.4 by Dave Gamache
- Node.js
  - Webpack
  - ESLint
  - Jest, Jest-Each
  - Babel
- API
  - ExchangeRate-API

## **Description**

Currency Exchanger is a web app that takes an amount, a base currency and a target currency. The dropdowns are automatically populated with all available options from an api call to get the codes for all supported currencies. Upon clicking submit, with the submitted data, the app makes an api call to get the most recent exchange rate. If the request receives a response, the result is shown to the user, otherwise an error is displayed, stating the currency does not exist. Note that the defaults are 1, USD to EUR.

### **Under Consideration**

- Cache API results
- Deploy on Render

## **Complete Setup**

- Navigate to main page of repo
- Click: Fork
- Fill out create repo form
- Above code, click: Clone
  - Copy the .git url
  - Paste into terminal

```bash
git clone .../.git
git pull origin main
```

The git pull command is only if necessary, such as choosing to add a README or LICENSE file when filling out the create repo form. You may encounter conflicts, since this template already comes with a README and LICENSE.

Optionally, you can remove .DS_Store from .gitignore, if you are not using a Mac.

Run:
```bash
npm install
```

### **Project Setup**

The api key used in code with ```process.env.API_KEY``` comes from a .env file in the root folder. This file is mentioned in .gitignore to keep the api key private and local. If you do not have a .env file, create one, add it to the .gitignore, then commit both .gitignore and .env before proceeding.

To get your own api key, sign up for an account at [ExchangeRate-API](https://app.exchangerate-api.com/) and copy the api key to your .env file.

## **Features**

To run the test suite, use the command ```npm run test``` in the terminal. You can also use ```npx jest```.

To create the production ready code for your project, use the command ```npm run build``` in the terminal.

To build and preview your project, use either ```npm run start``` or ```npm start``` in the terminal.

## **Known Bugs**

Please report any issues in using this app.

- Form layout inconsistency

## **License**

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Sm Kou
