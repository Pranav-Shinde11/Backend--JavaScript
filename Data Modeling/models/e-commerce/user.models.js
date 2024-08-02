import mangoose from 'mangoose'

const userSchema = new mangoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
    },




},{timestamps: true});

export const User =  mangoose.model('user', userSchema)
