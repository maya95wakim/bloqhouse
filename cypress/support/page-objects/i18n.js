const i18n = require('i18n')

i18n.configure({
    locales: ['en', 'nl'],
    defaultLocale: 'nl',
    staticCatalog: {
        en: {
            passwordAlert: "The password is invalid or the user does not have a password.",
            emailAlert: "This field must be a valid email",
            dashboard: "My dashboard"
        },
        nl: {
            passwordAlert: "Het wachtwoord is onjuist of deze gebruiker bestaat niet.",
            emailAlert: "Dit veld moet een geldig e-mailadres bevatten",
            dashboard: "Mijn dashboard"
        }
    }
})

export const setLocale = (locale) => i18n.setLocale(locale)
export const translate = (msg) => i18n.__(msg)