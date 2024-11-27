import { client } from "@/sanity/client";

const BANDS_QUERY = `*[_type == "band"]{ _id, name }`;

const options = { next: { revalidate: 30 } };

interface Band {
  _id: string;
  name: string;
}

export default async function BandsPage() {
  const bands = await client.fetch<Band[]>(BANDS_QUERY, {}, options);

  return (
    <div>
      <h1 className="font-bold text-xl">Bands</h1>

      {bands.map(band => <div key={band._id}>{band.name}</div>)}
    </div>
  )
}