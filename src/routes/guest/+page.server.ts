import Category from "$lib/server/models/category"
import MenuItem from "$lib/server/models/menu-item"
import { redirect, error } from "@sveltejs/kit"

export async function load({url}) {
  const categories = await Category.find({}, 'name').lean()
  if(categories.length == 0 || !categories) throw error(500, "No Categories available")
  
  const id = url.searchParams.get("category")
  if(!id && categories.length > 0) throw redirect(302, "/guest?category=" + categories[0]._id)
  
  const items = await MenuItem.find({category: id}).lean().populate('category')

  return {
    categories: categories.map(cat => ({...cat, _id: cat._id.toString()})) as Array<{_id: string, name: string}>,
    menuItems: items.map(item => ({...item, _id: item._id.toString(), category: {...item.category, _id: item.category._id.toString()}})),
  }
}