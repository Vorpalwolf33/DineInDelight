import mongoose from 'mongoose'

const MenuItemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	image: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "category"
	}
}, {
	timestamps: true
})

const MenuItem = mongoose.model('menu-item', MenuItemSchema)

export default MenuItem;