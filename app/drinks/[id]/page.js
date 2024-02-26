import Link from 'next/link'
import DrinksList from '../../../component/DrinksList'

// const url = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
import drinkImg from './drink.jpg'
import Image from 'next/image'

const getEachDrink = async (id) => {
  const res = await fetch(`${url}${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch a drink ...')
  }
  return res.json()
}
const EachDrinkPage = async ({ params }) => {
  const data = await getEachDrink(params.id)
  console.log(data)
  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb
  console.log(title, imgSrc)
  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        back to all drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        priority
        alt={title}
      />
      {/* <Image src={drinkImg} className='w-48 h-48 rounded-lg' alt='drink' /> */}
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  )
}

export default EachDrinkPage
