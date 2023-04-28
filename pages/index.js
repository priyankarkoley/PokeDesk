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
          <div key={i} className="w-full flex justify-center sm:w-fit hover:bg-gray-200 bg-gray-100 p-5 m-6 lg:mx-7 xl:mx-12 rounded-md">
            <Link href={`/pokemon?id=${i+1}`}>
              <Image 
                  placeholder="blur"
                  blurDataURL={pokeman.imageUrl}
                  src={pokeman.imageUrl}
                  height={200}
                  width={200}
                  alt="1">
              </Image>
              <div className="flex justify-center">
                <span>{i+1}.&nbsp;</span>
                <span className="capitalize">{pokeman.name}</span>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  </Layout>;
}

export async function getStaticProps() {
  // let imageUrl
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const { results } = await res.json();
  // console.log(results)
  const pokemons = results.map((pokeman, i) => {
    const paddedIndex = ("00" + (i + 1)).slice(-3);
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

    return {
      ...pokeman,
      imageUrl,
    };
  });
  return {
    props: { pokemons },
  };
}
