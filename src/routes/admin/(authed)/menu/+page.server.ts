import Category from "$lib/server/models/category";
import MenuItem from "$lib/server/models/menu-item";
import { error } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";
import { writeFileSync } from 'fs';

export async function load() {
	try {
		const categories = (await Category.find({}, 'name').lean()).map(cat => ({...cat, _id: cat._id.toString()}))
		const menuItems = await MenuItem.find({}, 'name image price category').lean().populate('category', 'name')
		return {
			categories,
			menuItems: menuItems.map(item => ({...item, _id: item._id.toString(), category: {...item.category, _id: item.category._id.toString()}})),
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
	"add-menu-item": async ({request}) => {
		const formData = Object.fromEntries(await request.formData())

		const file = formData.image as File
		const extension = file.type.split('/')[1]
		const fileName = Date.now().toString() + "." + extension

		const menuItem = new MenuItem({name: formData.name, category: formData.category, price: formData.price, image: fileName})
		try {
			menuItem.save()
		} catch(err) {
			throw error(500, "Couldn't store the new menu item")
		}

		try {
			writeFileSync(`./src/lib/assets/${fileName}`, Buffer.from(await file.arrayBuffer()))
			return {success: true}
		} catch(err) {
			throw error(500, "Unexpected error while saving the thumbnail")
		}
	}
} satisfies Actions;