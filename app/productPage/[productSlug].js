"use client"

import { useState, useEffect } from 'react';
import { PDP } from '../components/Pdp/pdp';

export default function productPage({searchParams}) {
  console.log('search', searchParams)
  
  return (
    <div>hello</div>
  )
}

export const getServerSideProps = async ({params}) => {
  console.log('params', params.id)
  
}