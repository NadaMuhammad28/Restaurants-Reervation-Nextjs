import Link from "next/link";
export default function SearchSideBar() {
  return (
    <aside className="w-1/5">
      <section className="border-b pb-4" aria-label="Regions">
        <h2 className="mb-2">Regions</h2>
        <ul>
          <li>
            <Link href="/" className="font-light text-reg">
              Toronto
            </Link>
          </li>
          <li>
            <Link href="/" className="font-light text-reg">
              Ottawa
            </Link>
          </li>
          <li>
            <Link href="/" className="font-light text-reg">
              Montreal
            </Link>
          </li>
          <li>
            <Link href="/" className="font-light text-reg">
              Hamilton
            </Link>
          </li>
          <li>
            <Link href="/" className="font-light text-reg">
              Kingston
            </Link>
          </li>
          <li>
            <Link href="/" className="font-light text-reg">
              Niagara
            </Link>
          </li>
        </ul>
      </section>
      <section className="border-b pb-4 mt-3" aria-label="Cuisines">
        <h2 className="mb-2">Cuisines</h2>
        <ul>
          <li>
            <Link href="/" className="font-light text-reg">
              Mexican
            </Link>
          </li>
          <li>
            <Link href="/" className="font-light text-reg">
              Italian
            </Link>
          </li>
          <li>
            <Link href="/" className="font-light text-reg">
              Chinese
            </Link>
          </li>
        </ul>
      </section>
      <section className="mt-3 pb-4" aria-label="Price range">
        <h2 className="mb-2">Price range</h2>
        <div className="flex">
          <Link href="/" className="font-light text-reg">
            {/* <a className="border w-full text-reg font-light rounded-l p-2">$ */}
          </Link>
          <Link href="/" className="font-light text-reg">
            {/* <a className="border-r border-t border-b w-full text-reg font-light p-2"> */}
            $$
          </Link>
          <Link href="/" className="font-light text-reg">
            {/* <a className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r"> */}
            $$$
          </Link>
        </div>
      </section>
    </aside>
  );
  {
    /* SEARCH SIDE BAR */
  }
}
