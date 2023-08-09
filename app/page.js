"use client"

import { useState, useEffect } from 'react';

export default function Home() {
    const [ data, setData ]= useState([]);

    useEffect(() => {
        const fetchData = async() => {
          try {
            const response = await fetch('/api/products').then((res) => res.json())
            const productData = response.hits
            setData(productData)
          } catch (error) {
            if(error) {
              console.log(error.name)
            }     
          }
        }
        fetchData()
        }, [])
    return (
        <div>Hello World</div>
    )
}
