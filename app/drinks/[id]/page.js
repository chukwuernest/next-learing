import Link from 'next/link'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getEachDrink = async (id) => {
  const res = await fetch(`${url}`)
}
const EachDrinkPage = ({ params }) => {
  return <div>eachDrinkPage</div>
}

export default EachDrinkPage
