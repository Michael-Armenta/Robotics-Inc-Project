export default function Success(props) {
  return (
    <>
      <div className="relative py-16 bg-blueGray-200 h-100">
        <div className="text-center pt-28">
          <section className="relative py-16 bg-blueGray-200">
            <h1 className="text-xl mb-5 w-fit mx-auto px-4 py-1 text-black font-large">
              Transaction Successful
            </h1>
            <div className="container mx-auto px-4">
              <p className="px-4 text-center">Thank you for your purchase</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
