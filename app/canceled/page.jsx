export default function Cancel({ children }) {
  return (
    <>
      <div className="relative py-16 bg-blueGray-200 h-100">
        <div className="text-center pt-28">
          <section className="relative py-16 bg-blueGray-200">
            <h1 className="text-xl mb-5 w-fit mx-auto px-4 py-1 text-black font-large">
              Transaction Canceled
            </h1>
            <div className="container mx-auto px-4">
              <p className="px-4 text-center">
                The transaction has been canceled.
              </p>
            </div>
            <a href="/">
              <button className="rounded bg-blue-900 p-1 mt-10">
                Return to Home Page
              </button>
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
