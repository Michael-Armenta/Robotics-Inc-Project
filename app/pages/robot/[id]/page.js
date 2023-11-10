import { getEmployees } from "@/lib/firebase/getEmployees";
import { Button } from "@mui/material";

async function getEmployee(id) {
  const payload = await getEmployees();
  const employees = Object.values(payload);
  const singleEmployee = employees.find((robot) => robot.uid == id);

  return singleEmployee;
}

export default async function EmployeePage({ params }) {
  console.log(params);

  const employee = await getEmployee(params.id);

  console.log(employee);
  return (
    <>
      <main className="profile-page">
        <header className="text-center pt-28">
          <h2 className="text-5xl text-white-900">
            {employee.first_name} {employee.last_name}
          </h2>
        </header>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words dark:bg-gray-800 ed w-full mb-6 shadow-xl rounded-lg">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        src={employee.image}
                        alt={employee.name}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-20">
                  <div className="pt-10 mb-2 text-blueGray-600">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                      Cost: ${employee.cost}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                      Specialty: {employee.specialty}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Email: {employee.email}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Phone #: {employee.phone_number}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Requested Times: {employee.age}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Years in Service: {employee.years_of_experience}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Manufacturer: {employee.manufacturer}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Model Number: {employee.uid}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Available:{" "}
                      {employee.available == true ? "Available" : "Unavailable"}
                    </p>
                    <Button>
                      <p>Buy Now</p>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
