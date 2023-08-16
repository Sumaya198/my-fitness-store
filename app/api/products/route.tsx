import { NextResponse } from "next/server";

async function getProducts() {
    const response = await fetch('https://cdn.develop.gymshark.com/training/mock-product-responses/algolia-example-payload.json');

    const products = await response.json();
    return products
}

export async function GET(request) {
    const products = await getProducts();
    return NextResponse.json(products);
}