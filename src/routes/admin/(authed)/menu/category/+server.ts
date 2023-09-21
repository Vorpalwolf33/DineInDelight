import Category from '$lib/server/models/category.js'
import { error } from '@sveltejs/kit'

export async function DELETE({url}) {
	const _id = url.searchParams.get("id")
	if(url) {
		try {
			await Category.findOneAndDelete({_id})
			return new Response(JSON.stringify({success: true}), {status: 200})
		} catch(err) {
			throw error(500, "Internal Server Error")
		}
	}
}