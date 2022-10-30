const mongoose = require('mongoose');

const mallSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    brands:[{
        name: {
            type: String,
            required: true
        },
        onSale:{
            type: Boolean,
            default: false
        },
        saleDate: Date
    }],
    uploadedBy:{
        type: String,
        required: true
    },
    shortDescription:{
        type: String,
        maxlength: 120
    },
    address:{
        type: String,
        required: true
    },
    location:{
        lat:{
            type: mongoose.Types.Decimal128
        },
        long:{
            type: mongoose.Types.Decimal128
        },
    },
    userReviews: [{
        username: String,
        review: String,
        rating:{
            type: Number,
            min: 0,
            max: 5
        }
    }]
});

const mall = mongoose.model('Mall', mallSchema);

module.exports = mall;