import { Coins } from "@/components/coins";
import { PageHeading } from "@/components/global";
import { ICoin } from "@/models";
import { getCoins, getCoinsTotal } from "@/services";
import Link from "next/link";

export default async function AllCryptoPage(props: {
  searchParams: { page?: string };
}) {
  const searchParams = await Promise.resolve(props.searchParams);

  const page = parseInt(searchParams?.page || "1", 10) || 1;

  const coins: ICoin[] = await getCoins(15, page);
  const coinsTotal = await getCoinsTotal();

  return (
    <main className="lg:px-12 md:px-6 px-3 bg-black bg-opacity-70 min-h-screen">
      <PageHeading
        title="Explore Cryptocurrencies"
        subtitle="Dive into the dynamic world of cryptocurrencies. Get real-time information on coin prices, market capitalization, trends, and much more."
      />

      <section className="mt-6">
        <Coins coins={coins} />

        <div className="flex justify-center items-center mt-6 space-x-4">
          <Link
            href={`?page=${Math.max(page - 1, 1)}`}
            className={`px-4 py-2 bg-gray-700 text-white rounded ${
              page === 1 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Previous
          </Link>
          <span className="text-white">Page {page}</span>
          <Link
            href={`?page=${page + 1}`}
            className={`px-4 py-2 bg-gray-700 text-white rounded ${
              page > coinsTotal ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Next
          </Link>
        </div>
      </section>
    </main>
  );
}