/* eslint-disable react/prop-types */

import { Button } from "@mui/material";
import Link from "next/link";

// The following component is used to make a templatate literal of a card, and export it.

export default function CardTemplate(props) {
  const navigateToSinglePage = () => {
    router.push(`/robot/${props.uid}`);
  };
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
      <img className="rounded-t-lg" src={props.image} alt={props.name} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.firstName} {props.lastName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
          Cost: ${props.cost}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
          Specialty: {props.specialty}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
          Email: {props.email}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
          Phone #: {props.phoneNumber}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
          Requested Times: {props.age}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
          Years in Service: {props.yoe}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
          Manufacturer: {props.manufacturer}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
          Model Number: {props.model}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
          Available: {props.available == true ? "Available" : "Unavailable"}
        </p>
        {props.available == true ? (
          <Button>
            <Link href={`../pages/robot/${props.model}`}>
              <p>View Details</p>
            </Link>
          </Button>
        ) : (
          <Button unselectable="on">
            <p>Unavailable</p>
          </Button>
        )}
      </div>
    </div>
  );
}
