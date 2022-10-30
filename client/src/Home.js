import { useQuery } from "@apollo/client";
import AddCar from "./components/addForms/AddCar";
import AddPerson from "./components/addForms/AddPerson";
import Title from "./components/layout/Title";
import Cars from "./components/Cars";
import Persons from "./components/Persons";
import { GET_PERSONS } from "./queries";

const Home = () => {
  const { loading, error } = useQuery(GET_PERSONS);
  if (loading) return "Loading.....";
  if (error) return `Error! ${error.message}`;
  return (
    /* Add Person,Car,Records Container */

    <div className="Container">
      <div className="addperson_container">
        <Title name="Add Person" />
        <AddPerson />
        
      </div>
    
      <div className="addcar_container">
          <Title name="Add Car" />
          <AddCar />
          
      </div>

      <div className="records_container">
        <Title name="Records" />
        <Persons />
        <Cars />
      </div>
    
      
    </div>
  );
};
export default Home;