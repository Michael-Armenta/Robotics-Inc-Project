import { getEmployees } from "@/lib/firebase/getEmployees";

async function getEmployee(id) {
  const payload = await getEmployees();
  const employees = Object.values(payload);
  const singleEmployee = employees.find((robot) => robot.uid == id);

  return singleEmployee;
}

async function EmployeePage({ params }) {
  console.log(params);

  const employee = await getEmployee(params.id);

  console.log(employee);
  return (
    <>
      <header className="text-center pt-28">
        <h2 className="text-5xl text-slate-900">Employee Page {params.id}</h2>
        <p>this is a single item full information page</p>
      </header>
      <main className=" min-h-screen py-24">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
          <img
            className="rounded-t-lg"
            src={employee.image}
            alt={employee.name}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {employee.firstName} {employee.lastName}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              Cost: ${employee.cost}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              Specialty: {employee.specialty}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              Email: {employee.email}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              Phone #: {employee.phoneNumber}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              Requested Times: {employee.age}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              Years in Service: {employee.yoe}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              Manufacturer: {employee.manufacturer}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              Model Number: {employee.model}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              Available:{" "}
              {employee.available == true ? "Available" : "Unavailable"}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default EmployeePage;
