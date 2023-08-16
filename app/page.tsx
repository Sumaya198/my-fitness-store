'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { Navigation } from './components/Navigation/navigation';
import { Products } from './components/Products/products';
import { Sidebar } from './components/Sidebar/sidebar';
import { Card } from './components/Card/card';

export default function Home() {
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

    function filteredData(data, selected, query) {
        let filteredProducts = data;
        //Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        //selected filter

        // filter for colour
        if (selected.filterType === 'colourFilter') {
            filteredProducts = filteredProducts.filter(({ colour }) => colour === selected.filterValue);
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
            console.log('wishlist', wishlist);
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

        return filteredProducts?.map(({ id, objectID, title, featuredMedia, availableSizes, price }) => (
            <Card
                key={id}
                addToCart={addToCart}
                objectID={objectID}
                availableSizes={availableSizes}
                addFavourites={addFavourites}
                featuredMedia={featuredMedia}
                title={title}
                price={price}
            />
        ));
    }

    const results = filteredData(data, selectedCategory, query);

    return (
        <div>
            <Navigation query={query} handleChange={handleChange} />
            <Sidebar handleChangePriceRadio={handleChangePriceRadio} handleChangeRadio={handleChangeRadio} />
            <Products results={results} />
        </div>
    );
}
