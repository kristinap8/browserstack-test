const { faker } = require("@faker-js/faker");

function generateRandomEmail() {
    return faker.internet.email();
}

function generateRandomPassword() {
    return faker.internet.password();
}

module.exports = {
    generateRandomEmail,
    generateRandomPassword,
};
