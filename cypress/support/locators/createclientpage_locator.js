module.exports = {
    elements: {
        industry_input: '//*[@id="select2-industry-container"]',
        clientname_input: '//*[@id="companyName"]',
        description_input: '//*[@id="description"]',
        address_input: '//*[@id="address"]',
        regency_input: '//*[@id="select2-regencies-container"]',
        contactname_input: '//*[@id="contactPerson"]',
        email_input: '//*[@id="email"]',
        contactnumber_input: '//*[@id="contactNumber"]',
        website_input: '//*[@id="webUrl"]',
        status_dropdown: '//*[@id="select2-client-status-container"]',
        status_input: '/html/body/span/span/span[1]/input',
        logo_input: '//*[@id="image"]',
        submit_button: '//*[@id="submit"]',
        cancel_button: '//*[contains(text(), "Batal")]',
        toast_message: '//*[contains(@class, "toast-message")]'
    }
}