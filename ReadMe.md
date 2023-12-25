# Mobile Automation on BrowserStack using WebdriverIO

## Table of Contents

1. [Summary of Repository](#summary-of-repo)
2. [Requirements](#requirements)
3. [Steps to Install](#steps-to-install)
4. [Steps to Launch](#steps-to-launch)
5. [Generate a Report](#create-a-report)

## Summary of Repository

This repository contains automated tests for the Android Native Demo mobile app, implemented using WebDriverIO. The application is included within the repository. <br>
You can find the deployed Allure report on GitHub Pages [here](https://kristinap8.github.io/browserstack-test/).

## Requirements

- **Node.js:** Ensure that you have Node.js installed.
- **Java 8 or higher:** This is necessary for working with Allure.
- **BrowserStack account:** You need a BrowserStack account to run the tests.
- **Other dependencies:** Check the `package.json` file for additional dependencies.

## Steps to Install

1. **Clone This Repository:**

    ```bash
    git clone https://github.com/Kiriago-san/browserstack_test.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd browserstack_test
    ```

3. **Install Project Dependencies:**

    ```bash
    npm install
    ```

4. **Rename the `.env.example` to `.env` and add the values to the variables.**

## Steps to Launch:

1. **Run All Tests on Google Pixel 3:**

    ```bash
    npm run test:pixel3
    ```

2. **Run All Tests on Huawei P30:**

    ```bash
    npm run test:huawei-p30
    ```

3. **Run All Tests on Samsung Galaxy S10:**

    ```bash
    npm run test:samsung-s10
    ```

## Generate a Report

1. **Create an Allure Report for Test Runs:**

    ```bash
    npm run report:generate
    ```

2. **Open the Allure Report:**

    ```bash
    npm run report:open
    ```

