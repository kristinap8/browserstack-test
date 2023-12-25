const AppScreen = require("./app.screen");

const signUpContainerBtn = "~button-sign-up-container";
const emailInput = "~input-email";
const passwordInput = "~input-password";
const confirmPasswordInput = "~input-repeat-password";
const loginBtn = "~button-LOGIN";
const signUpBtn = "~button-SIGN UP";
const alertBox = "id=android:id/content";
const successMsg = "id=android:id/message";

class LoginScreen extends AppScreen {
    async getAlertBox() {
        return await super.getElement(alertBox);
    }

    async getSuccessMsg() {
        return await super.getElement(successMsg);
    }

    async clickSignUpContainerBtn() {
        await super.clickElement(signUpContainerBtn);
    }

    async login(email, password) {
        await super.fillElement(emailInput, email);
        await super.fillElement(passwordInput, password);
        await super.clickElement(loginBtn);
    }

    async register(email, password) {
        await super.fillElement(emailInput, email);
        await super.fillElement(passwordInput, password);
        await super.fillElement(confirmPasswordInput, password);
        await super.clickElement(signUpBtn);
    }
}

module.exports = new LoginScreen();
