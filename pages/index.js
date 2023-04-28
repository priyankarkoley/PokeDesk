import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pokemons }) {
  return <Layout title="PokeDesk-Know Your Pokemon">
    <div className="flex flex-wrap mx-auto justify-center">
      {
        pokemons.map((pokeman, i)=>(
          <div key={i} className="bg-gray-200 mx-12 my-4">
            <Link href={`/pokemon?id=${i+1}`}>
              <Image 
                  placeholder="blur"
                  blurDataURL={pokeman.imageUrl}
                  src={pokeman.imageUrl}
                  height={200}
                  width={200}
                  alt="1">
              </Image>
              <span>{i+1}.&nbsp;</span>
              <span>{pokeman.name}</span>
            </Link>
          </div>
        ))
      }
    </div>
  </Layout>;
}

export async function getStaticProps(context) {
  let imageUrl
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const { results } = await res.json();
  const pokemons = results.map((pokeman, i) => {
    const paddedIndex = ("00" + (i + 1)).slice(-3);
    imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

    return {
      ...pokeman,
      imageUrl,
    };
  });return {
    props: { pokemons },
  };
}
