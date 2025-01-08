"use client"; // Add this line

import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: "The Dandy chair",
        price: "£250",
        image: "/Right Image.png"
    },
    {
        id: 2,
        title: "Rustic Vase Set",
        price: "£165",
        image: "/parent.png"
    },
    {
        id: 3,
        title: "The Silky Vase",
        price: "£125",
        image: "/bottle.png"
    },
    {
        id: 4,
        title: "The Lucy Lamp",
        price: "£399",
        image: "/lamp.png"
    },
    {
        id: 5,
        title: "Light",
        price: "£300",
        image: "/lights.png"
    },
    {
        id: 6,
        title: "Cup",
        price: "£50",
        image: "/cup.png"
    },
    {
        id: 7,
        title: "Small Yellow Chair",
        price: "£125",
        image: "/small yellow chair.png"
    },
    {
        id: 8,
        title: "Multiple Chair",
        price: "£200",
        image: "/multiple chair.png"
    },
    {
        id: 9,
        title: "The Dandy chair",
        price: "£250",
        image: "/Right Image.png"
    },
    {
        id: 10,
        title: "Rustic Vase Set",
        price: "£165",
        image: "/parent.png"
    },
    {
        id: 11,
        title: "The Silky Vase",
        price: "£125",
        image: "/bottle.png"
    },
    {
        id: 12,
        title: "The Lucy Lamp",
        price: "£399",
        image: "/lamp.png"
    }
];

const ProductListingPage = () => {
    const [category, setCategory] = useState('All');
    const [productType, setProductType] = useState('All');
    const [price, setPrice] = useState('All');
    const [brand, setBrand] = useState('All');
    const [sortBy, setSortBy] = useState('Date added');

    return (
        <main className="container mx-auto px-4 py-6">
            <div className="relative mb-6">
                <img src="/Frame 143.png" alt="Frame 143" className="w-full h-50 object-cover" />
            </div>
            <div className="flex justify-between mb-4">
                <div className="flex space-x-4">
                    <div className="filter">
                        <label className="block mb-1">Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border rounded p-2">
                            <option>All</option>
                            <option>Plant pots</option>
                            <option>Ceramics</option>
                            <option>Tables</option>
                            <option>Chairs</option>
                            <option>Crockery</option>
                            <option>Tableware</option>
                            <option>Cutlery</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label className="block mb-1">Product type</label>
                        <select value={productType} onChange={(e) => setProductType(e.target.value)} className="border rounded p-2">
                            <option>All</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label className="block mb-1">Price</label>
                        <select value={price} onChange={(e) => setPrice(e.target.value)} className="border rounded p-2">
                            <option>All</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label className="block mb-1">Brand</label>
                        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="border rounded p-2">
                            <option>All</option>
                        </select>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="sort">
                        <label className="block mb-1">Sort by</label>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border rounded p-2">
                            <option>Date added</option>
                        </select>
                    </div>
                </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.slice(0, 4).map(product => (
                    <li key={product.id} className="border p-4">
                        <img src={product.image} alt={product.title} className="w-full h-60 object-contain mb-4"/>
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p className="text-gray-700">{product.price}</p>
                    </li>
                ))}
            </ul>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {products.slice(4, 8).map(product => (
                    <li key={product.id} className="border p-4">
                        <img src={product.image} alt={product.title} className="w-full h-60 object-contain mb-4"/>
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p className="text-gray-700">{product.price}</p>
                    </li>
                ))}
            </ul>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {products.slice(8).map(product => (
                    <li key={product.id} className="border p-4">
                        <img src={product.image} alt={product.title} className="w-full h-60 object-contain mb-4"/>
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p className="text-gray-700">{product.price}</p>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center mt-6">
                <button className="bg-[#2A254B] text-white px-6 py-2 rounded hover:bg-[#1b193d]">
                    View collection
                </button>
            </div>
        </main>
    );
};

export default ProductListingPage;
