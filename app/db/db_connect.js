import mongoose from "mongoose"
const DBConnect = async () => {
    try {
        await mongoose.connect(process.env.MongoURI);
        console.log("DB Connected")
    } catch (err) {
        console.log(err)
    }
}

