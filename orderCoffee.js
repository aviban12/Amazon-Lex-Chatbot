'use strict';

const lexResponses = require('./lexResponses');

function validateCoffeOrder(coffeeType)
{
    if(coffeeType && types)
}

module.exports = function(intentRequest,callback)
{
    var coffeetype = intentRequest.currentIntent.slots.coffee;
    console.log(coffeetype + " ");
    const source  = intentRequest.invocationSource;
    if(source === 'DialogCodeHook')
    {
        const slots = intentRequest.currentIntent.slots;
        const validateResult = validateCoffeOrder(coffeetype);
        if(!validateResult.isValid)
        {
            slots[`${validateResult.violatedSlot}`] = null;
            callback(lexResponses.elicitSlot(intentRequest.sessionAttributes,intentRequest.currentIntent.name,slots,validateResult));
            return;
        }
        callback(lexResponses.delegate(intentRequest.sessionAttributes,intentRequest.currentIntent.slots));
        return;
    }
}