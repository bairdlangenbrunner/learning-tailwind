import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import AddToCart from './components/AddToCart'

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Link href="/users">Users</Link>
      <br></br>
      <Link href="/users/new">New</Link>
      <ProductCard />
    </main>
  )
}
