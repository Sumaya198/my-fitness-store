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

    const products = await fetch(
        'https://cdn.develop.gymshark.com/training/mock-product-responses/algolia-example-payload.json',
    ).then((res) => res.json());
    const productData = products.hits;
    const item = productData.find(({ handle }) => handle === params.handle);

    return (
        <div>
            <PDP item={item} />
        </div>
    );
}
