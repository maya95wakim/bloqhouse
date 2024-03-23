export const getLanguage = () => {
    let language = 'nl'
    cy
        .url()
        .then(url => {
            if (url.includes('/en')) {
                language = 'en'
            }
        })
    return language
}