import { PageHeading } from "@/components/global";
import { IExchange } from "@/models";
import { getExchanges, getExchangesTotal } from "@/services";
import Exchanges from "../../components/exchanges/exchanges/index";
import Link from "next/link";

export default async function ExchangesPage(props: {
  searchParams: { page?: string };
}) {
  const searchParams = await Promise.resolve(props.searchParams);

  const page = parseInt(searchParams?.page || "1", 10) || 1;

  const exchanges: IExchange[] = await getExchanges(12, page);
  const exchangesTotal = await getExchangesTotal();

  return (
    <main className="lg:px-12 md:px-6 px-3 bg-black bg-opacity-70 min-h-screen">
      <PageHeading
        title={"Crypto Exchanges"}
        subtitle={
          "Discover the top cryptocurrency exchanges ranked by trust score and trading volume."
        }
      />
      <section className="mt-6">
        <Exchanges exchanges={exchanges} />

        {/* Pagination Controls */}
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
              page > exchangesTotal ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Next
          </Link>
        </div>
      </section>
    </main>
  );
}
