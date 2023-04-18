import Form from "./components/Form";
import Summary from "./components/Summary";

const Reserve = () => {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Summary />
        <Form />
      </div>
    </div>
  );
};

export default Reserve;
