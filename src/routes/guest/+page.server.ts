import Category from "$lib/server/models/category"
import MenuItem from "$lib/server/models/menu-item"

export async function load({url}) {
  const categories = await Category.find({}, 'name').lean()
  const id = url.searchParams.get("category")
  const items = await MenuItem.find({category: id}).lean().populate('category')

  return {
    categories: categories.map(cat => ({...cat, _id: cat._id.toString()})) as Array<{_id: string, name: string}>,
    menuItems: items.map(item => ({...item, _id: item._id.toString(), category: {...item.category, _id: item.category._id.toString()}})),
  }
}