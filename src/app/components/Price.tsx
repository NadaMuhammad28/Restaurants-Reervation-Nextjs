import { PriceProps } from "../models/interfaces";
export default function Price(props: PriceProps) {
  switch (props.price) {
    case "CHEAP": {
      return (
        <p className="flex mr-3">
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </p>
      );
    }
    case "REGULAR": {
      return (
        <p className="flex mr-3">
          <span>$$$</span>
          <span className="text-gray-400">$</span>
        </p>
      );
    }

    case "EXPENSIVE": {
      return (
        <p className="flex mr-3">
          <span>$$$$</span>
        </p>
      );
    }
    default: {
      return (
        <p className="flex mr-3">
          <span>$$$</span>
          <span className="text-gray-400">$</span>
        </p>
      );
    }
  }
}
