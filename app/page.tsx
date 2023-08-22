'use client';

import Link from 'next/link';
import { Homepage } from './components/homepage/homepage';
import { Benefits } from './components/Benefits/benefits';

export default function Home() {
    return (
        <div>
            <Homepage />
            <Benefits />
        </div>
    );
}
