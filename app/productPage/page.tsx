'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { Navigation } from '../components/Navigation/navigation';
import { Products } from '../components/Products/products';
import { Sidebar } from '../components/Sidebar/sidebar';
import { Card } from '../components/Card/card';
import { MiniPageBanner } from '../components/miniPageBanner/mini-page-banner';

export default function ProductPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({
        filterType: null,
        filterValue: '',
    });

    const [query, setQuery] = useState('');
    // Input filter

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/products').then((res) => res.json());
                const productData = response.hits;
                setData(productData);
                setIsLoading(false);
            } catch (error) {
                if (error) {
                    console.log(error.name);
                }
            }
        };
        fetchData();
    }, []);

    //search bar
    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = data.filter(
        (product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1,
    );

    // Radio Filters colour

    const handleChangeRadio = (event) => {
        console.log('name', event.target.getAttribute('name'), 'colourFilter');
        setSelectedCategory({
            filterType: event.target.getAttribute('name'),
            filterValue: event.target.value,
        });
    };

    const handleChangePriceRadio = (event) => {
        console.log('second', event.target.getAttribute('name'), 'typeFilter');
        setSelectedCategory({
            filterType: event.target.getAttribute('name'),
            filterValue: event.target.value,
        });
    };

    const handleChangeSizeRadio = (event) => {
        console.log('second', event.target.getAttribute('name'), 'sizeFilter');
        setSelectedCategory({
            filterType: event.target.getAttribute('name'),
            filterValue: event.target.value,
        });
    };

    function filteredData(data, selected, query) {
        const size = data.avaiableSizes?.map((i) => i.size);

        let filteredProducts = data;
        //Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        // filter for colour
        if (selected.filterType === 'colourFilter') {
            filteredProducts = filteredProducts.filter(({ colour }) => colour === selected.filterValue);
        }

        // filter for colour

        ///Think about this function!!!!
        // const sizes = data.availabeSizes.map((size) => size.size);

        const tt = filteredProducts.map((t) => {
            t.availabeSizes;
        });

        if (selected.filterType === 'sizeFilter') {
            filteredProducts = filteredProducts.filter(({ sizeInStock }) =>
                sizeInStock?.includes(selected.filterValue),
            );
        }

        // filter for type
        if (selected.filterType === 'typeFilter') {
            filteredProducts = filteredProducts.filter(({ title }) => title === selected.filterValue);
        }

        const addFavourites = (wishlist) => {
            if (!favourites.includes(wishlist)) {
                setFavourites([...favourites, wishlist]);
                console.log('favouries', [...favourites, wishlist]);

                localStorage.setItem('myWishlist', JSON.stringify([...favourites, wishlist]));

                toast.success('Item added to wishlist.');
            } else {
                setFavourites([...favourites.filter((item) => item !== wishlist)]);
            }
        };

        const addToCart = (cartList) => {
            if (!cart.includes(cartList)) {
                setCart([...cart, cartList]);
                console.log('favouries', [...cart, cartList]);

                localStorage.setItem('myCart', JSON.stringify([...cart, cartList]));

                toast.success('Item added to cart.');
            } else {
                setCart([...cart.filter((item) => item !== cartList)]);
            }
            console.log('wishlist', cartList);
        };

        return filteredProducts?.map(({ id, handle, objectID, title, featuredMedia, availableSizes, price }) => (
            <Card
                key={id}
                addToCart={addToCart}
                objectID={objectID}
                availableSizes={availableSizes}
                addFavourites={addFavourites}
                featuredMedia={featuredMedia}
                title={title}
                price={price}
                handle={handle}
            />
        ));
    }

    const results = filteredData(data, selectedCategory, query);
    if (isLoading) return <p>Loading....</p>;
    return (
        <div>
            <Navigation query={query} handleChange={handleChange} />
            <MiniPageBanner />
            <Sidebar
                handleChangeSizeRadio={handleChangeSizeRadio}
                handleChangePriceRadio={handleChangePriceRadio}
                handleChangeRadio={handleChangeRadio}
            />
            <Products results={results} />
        </div>
    );
}
