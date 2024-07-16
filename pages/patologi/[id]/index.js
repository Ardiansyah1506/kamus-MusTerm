import axios from "../../../fetch/axios";
import Model from "./model";

const Patologi = ({ patologi }) => {
  if (!patologi) {
    return (
      <div className="container mx-auto p-4">Patologi tidak ditemukan.</div>
    );
  }
  return (
    <div className="container mx-auto p-4 text-white">
        <Model name={patologi.foto}/>
      <h1 className="text-xl text-white font-bold">{patologi.nama}</h1>
      <div  dangerouslySetInnerHTML={{ __html: patologi.deskripsi }} className="font-light" />
    </div>
  );
};

export async function getServerSideProps(context) {
    const { id } = context.params;
  
    try {
      const response = await axios.get(`/patologi/${id}`);
      if (response.data) {
        return {
          props: {
            patologi: response.data,
          },
        };
      }
    } catch (error) {
      console.error("Error fetching patologi data:", error);
    }
  
    return {
      props: {
        patologi: null
      },
    };
  }
  

export default Patologi;
