import { redirect, type Actions } from "@sveltejs/kit";

export const actions = {
	login: async ({request, cookies}) => {
		const formData = await request.formData()
		const user_id = formData.get('user_id')
		const password = formData.get('password')
		if(user_id == "admin@gmail.com" && password == "abcd1234") {
			cookies.set('authed', JSON.stringify(true))
			throw redirect(302, '/admin/analytics')
		}
	},
} satisfies Actions