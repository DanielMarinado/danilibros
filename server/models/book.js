const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            text: true,
        },
        isbn: {
            type: String,
            unique: true,
            trim: true,
            required: true,
            maxlength: 32,
            text: true,
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 2000,
            text: true,
        },
        edition: {
            type: String,
            required: true,
            maxlength: 500,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            trim: true,
            maxlength: 32,
        },
        category: [
            {
                type: ObjectId,
                ref: "Category",
            }
        ],
        author: [
            {
                type: ObjectId,
                ref: "Author",
            }
        ],
        country: {
            type: ObjectId,
            ref: "Country"
        },
        quantity: Number,
        sold: {
            type: Number,
            default: 0,
        },
        images: {
            type: Array,
        },
        format: {
            type: String,
            enum: ["Paperback", "Hardcover", "Booket", "Kindle Edition"]
        },
        editorial: {
            type: ObjectId,
            ref: "Editorial",
        },
        languages: {
            type: String,
            enum: ["English", "Español"],
        },
        ratings: [
            {
                star: Number,
                postedBy: { type: ObjectId, ref: "User" },
            }
        ],
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "Inactive"],
        },
        publication_date: {
            type: Date,
        },
        pages: {
            type: Number,
            required: true,
            trim: true,
            maxlength: 3500,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);