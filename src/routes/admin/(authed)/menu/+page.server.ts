import Category from "$lib/server/models/category";
import MenuItem from "$lib/server/models/menu-item";
import { error } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";

export async function load() {
	try {
		const categories = (await Category.find({}, 'name').lean()).map(cat => ({...cat, _id: cat._id.toString()}))
		const menuItems = await MenuItem.find().lean()
		return {
			categories,
			menuItems,
			menuItemsOrder: ["Id", "Name", "Price", "Category"],
		}
	} catch(err) {
		console.log(err)
		throw error(500, "Couldn't find Categories")
	}
}

export const actions = {
	"add-category": async ({request}) => {
		const name = (await request.formData()).get("name")
		const category = new Category({name})
		return category.save()
			.then(() => {
				return {success: true}
			})
			.catch(err => {
				console.log(err)
				return new Error(err)
			})
	},
	// "delete-category": async ({request}) => {
		
	// }
} satisfies Actions;