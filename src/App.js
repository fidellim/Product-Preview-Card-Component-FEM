import React from 'react'
import Card from './components/Card'
import { products } from './constants'

const App = () => {
    return (
        <div className="w-screen min-h-screen bg-cream">
            <main className="w-screen min-h-screen flex justify-center items-center">
                {products.map((product) => (
                    <Card product={product} key={product.productName} />
                ))}
            </main>
        </div>
    )
}

export default App
