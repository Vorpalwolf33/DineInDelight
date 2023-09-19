import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';

const configDB = () => {
	console.log("Connecting to database....")
	mongoose.Promise = global.Promise
	return mongoose.connect(MONGO_URL)
}

export default configDB