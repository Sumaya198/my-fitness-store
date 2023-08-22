import { PDP } from '../../components/pdp/pdp';
import { useEffect, useState } from 'react';

interface ProductPageProps {
    params: {
        handle: string;
    };
}
export default async function productDP({ params }: ProductPageProps) {
    if (!params) {
        return {
            notFound: true,
        };
    }
    console.log('params', params);
    const products = await fetch(
        'https://cdn.develop.gymshark.com/training/mock-product-responses/algolia-example-payload.json',
    ).then((res) => res.json());
    console.log('product', products);
    const productData = products.hits;
    const filterHandle = productData.find(({ handle }) => handle === params.handle);
    console.log('filtered', filterHandle);
    return (
        <div>
            <PDP filterHandle={filterHandle} />
        </div>
    );
}
