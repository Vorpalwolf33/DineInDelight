import configDB from '$lib/server/db/configDB';
import { error } from '@sveltejs/kit';

configDB()
	.then(() => {
		console.log("Successfully connected to database")
	})
	.catch(() => {
		throw error(500, "Unable to connect to database")
	})