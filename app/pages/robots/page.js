import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/header/PageHeader";
import { getEmployees } from "@/lib/firebase/getEmployees";
import CardTemplate from "@/components/card/CardTemplate";

async function EmployeesPage() {
  const robots = await getEmployees();
  const values = Object.values(robots);

  return (
    <>
      <main>
        <div className="flex flex-wrap justify-evenly">
          {values.map((robot) => (
            <CardTemplate
              key={robot.uid}
              uid={robot.uid}
              firstName={robot.first_name}
              lastName={robot.last_name}
              age={robot.age}
              yoe={robot.years_of_experience}
              email={robot.email}
              phoneNumber={robot.phone_number}
              specialty={robot.specialty}
              cost={robot.cost}
              image={robot.image}
              manufacturer={robot.manufacturer}
              model={robot.uid}
              available={robot.available}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default EmployeesPage;
