// HomePage component

import Link from "next/link";

export default function LandingPage() {
  return (
    <main clasName="text-blueGray-700 antialiased">
      <section
        className="header relative pt-16 items-center flex h-screen"
        style={{ maxHeight: "860px" }}
      >
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Welcome to Rebotics Inc.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Our robots are designed with specialized functionalities to
                address the unique requirements of various industries. Whether
                it's automation in manufacturing, logistics, healthcare, or
                beyond, Robotics Inc. delivers tailored solutions that redefine
                operational standards.
              </p>
              <div className="mt-12">
                <Link
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  href="/pages/robots"
                >
                  Robots
                </Link>
                <Link
                  href="https://github.com/Michael-Armenta/Robotics-Inc-Project"
                  className="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 "
          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/ill_header_3.png"
          alt="..."
          style={{ maxHeight: "860px" }}
        />
      </section>

      <section
        className="pb-20 bg-blueGray-200 -mt-24"
        style={{
          backgroundColor: "rgba(226,232,240)",
          opacity: "1",
          color: "black",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap pt-5">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Specialized Robotics
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Robotics Inc. has been recognized for its excellence in
                    delivering robotic solutions across various industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Years of Experience</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    With a rich history and years of experience, Robotics Inc.
                    continues to be a leader in providing cutting-edge robotic
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Diverse Manufacturers
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Robotics Inc. collaborates with diverse manufacturers to
                    ensure a broad range of high-quality robotic solutions,
                    meeting the evolving needs of our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-50">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Elevate Your Experience with Robotics Inc.
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Working with Robotics Inc. is not just a partnership; it's an
                immersive journey into the world of cutting-edge technology. Our
                dedicated team is committed to making your experience fantastic
                by providing tailored robotic solutions that exceed your
                expectations.
              </p>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1287&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80&amp;h=1000"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{ height: "95px", top: "-94px" }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Robotics Inc. provides top-notch services, leveraging
                    cutting-edge technology and expertise in the field of
                    robotics.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://plus.unsplash.com/premium_photo-1676750395664-3ac0783ae2c2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">A growing company</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Robotics Inc. is a rapidly growing company, expanding its
                  capabilities and making strides in the field of robotics. Our
                  commitment to innovation sets us apart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="pb-20 relative block bg-blueGray-800"
        style={{ backgroundColor: "rgb(30,41,59)" }}
      >
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
            style={{ color: "rgb(30,41,59)" }}
          >
            <polygon
              className="text-blueGray-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-24">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">Coming Soon</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Stay tuned for our upcoming releases, featuring state-of-the-art
                advancements in robotics and automation. Our future products
                will include companions and the next model in our series of
                robotics!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img
                  src="https://robohash.org/J8V.png?set=set4"
                  alt="Kitty Companions"
                  style={{ width: "48px", height: "48px" }}
                />
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Catpanions!
              </h6>
              <p className="mt-2 mb-4 text-blueGray-400">
                Introducing Cat Companions, a delightful innovation from
                Robotics Inc. Our robotic feline friends are designed to bring
                joy and comfort to your life.
              </p>
            </div>

            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img
                  src="https://robohash.org/QD4.png?set=set3"
                  alt="Suave Robots"
                  style={{ width: "48px", height: "48px" }}
                />
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Suave Robotics!
              </h5>
              <p className="mt-2 mb-4 text-blueGray-400">
                Elevate your robotic experience with Suave Robotics from
                Robotics Inc. From impeccable design to seamless functionality,
                these robots redefine luxury in automation, making a statement
                of style and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
