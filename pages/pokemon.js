import Layout from '@/components/Layout'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function pokemons({data}) {
  return (<Layout title={data.name.charAt(0).toUpperCase() + data.name.slice(1)}>
    <div className='min-h-screen'>
      <div className='text-4xl space-y-4'>
          <Image 
            placeholder="blur"
            blurDataURL={data.imageUrl}
            src={data.imageUrl}
            height={300}
            width={300}
            alt="1">
          </Image>
          <div className=''>
            <div className='capitalize mb-4'>
              #{data.id}&nbsp;{data.name}
            </div>
              <p className='text-lg'>Height: {data.height}</p>
              <p className='text-lg'>Weight: {data.weight}</p>
              <p className='text-lg capitalize'>Types: {data.types.map((t, i)=>(
                '\n'+t.type.name
              ))}</p>
          </div>
      </div>
        <div className='text-center my-3'>
          <div className='flex justify-center'><Link href='/'>
            <button type='button' className='bg-slate-300 underline'>Go Back</button>
          </Link></div>
        </div>
      </div>
  </Layout>
  )
}

export async function getServerSideProps({query}) {
  const id = query.id
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const {name, height, weight, types} = await res.json();
  const paddedIndex = ("00" + (id)).slice(-3);
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

  const data={
    id,
    name,
    height,
    weight,
    types,
    imageUrl
  }
  
  return {
    props: { data },
  };
}