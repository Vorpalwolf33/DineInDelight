import { redirect } from "@sveltejs/kit";

export function load({request}) {
	const host = request.headers.get("host")
	// console.log(host)
	// if(host == "dine-in-delight.vorpalwolf.com" || host == "localhost:5173")
	// 	throw redirect(302, '/guest')
	// if(host == "did-admin.vorpalwolf.com")
	// 	throw redirect(302, '/admin')
	if(host) throw redirect(302, '/admin')
}
