
Feature('Automated UI test');

Scenario('Search for the hotel in city Madrid', (I) => {
    I.amOnPage('/');
    I.waitForElement('.cookiebot__button');
    I.click('.cookiebot__button');

    const searchHotel = locate('label').withText('Hotel (City)');
    I.click(searchHotel);
    I.seeElement('#startForm');
    
    I.seeElement('input[type=search][name="base[searchTerm]"]');

    I.fillField('input[type=search][name="base[searchTerm]"]', 'Madrid');

});
