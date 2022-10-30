const mongoose = require('mongoose');
const Mall = require('./models/mall');
const CONFIG = require('./config');

// --Configuration--
mongoose.connect(CONFIG.DEV.MONGOOSECONNURL)
    .then(() => {
        console.log(CONFIG.LOG.MONGOOSECONNSUCC);
    })
    .catch(err => {
        console.log(CONFIG.LOG.MONGOOSECONNFAIL);
        console.error(err);
    });

const malls = [
    {
        name: "Sm City Fairview",
        brands: [
            {
                name: "Lee",
            },
            {
                name: "Bench",
            },
            {
                name: "Penshoppe",
            }
        ],
        uploadedBy: "admin",
        shortDescription: "It is the 2nd SM Supermall in Quezon City and the 8th largest SM shopping mall in the Philippines",
        address: "Quirino Highway corner Regalado Avenue, Novaliches, Quezon City, Philippines"
    },
    {
        name: "Sm City North Edsa",
        brands: [
            {
                name: "Marugame",
            },
            {
                name: "Uniqlo",
            },
            {
                name: "Penshoppe",
            }
        ],
        uploadedBy: "admin",
        shortDescription: "Discover ways to shop and dine at SM City North Edsa, Philippines.",
        address: "North Avenue corner EDSA, Quezon City, 1100 Metro Manila"
    },
    {
        name: "Sm City North Edsa",
        brands: [
            {
                name: "Marugame",
            },
            {
                name: "Uniqlo",
            },
            {
                name: "Penshoppe",
            }
        ],
        uploadedBy: "admin",
        shortDescription: "Learn about SM Aura Premier located in BGC, Taguig the 13th SM Supermall in Metro Manila.",
        address: "26th Street Corner McKinley Parkway Bonifacio Global City, Taguig City Philippines"
    },
    {
        name: "Sm City North Edsa",
        brands: [
            {
                name: "Marugame",
            },
            {
                name: "Uniqlo",
            },
            {
                name: "Penshoppe",
            }
        ],
        uploadedBy: "admin",
        shortDescription: "Know more about SM Seaside City Cebu's location and stores to enjoy your next shopping and dining experience.",
        address: "South Road Properties, Cebu City"
    }
];

Mall.insertMany(malls).then(p => {
    console.log("DB Seeded Successfully");
})
.catch(e =>{
    console.log(e);
});