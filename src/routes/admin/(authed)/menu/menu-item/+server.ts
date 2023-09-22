import MenuItem from '$lib/server/models/menu-item.js'
import { error } from '@sveltejs/kit'
import { unlinkSync } from 'fs';

export async function DELETE({url}) {
	const _id = url.searchParams.get("id")
	if(url) {
		try {
			const deletedItem = await MenuItem.findOneAndDelete({_id})
			if(deletedItem)
				await unlinkSync(`assets/${deletedItem.image}`)
			else throw error(400, "Menu Item not found")
			return new Response(JSON.stringify({success: true}), {status: 200})
		} catch(err) {
			throw error(500, "Internal Server Error")
		}
	}
}

