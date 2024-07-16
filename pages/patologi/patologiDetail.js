import axios from "../../fetch/axios";

const PatologiDetail = ({ patologi }) => {
  if (!patologi) {
    return (
      <div className="container mx-auto p-4">Patologi tidak ditemukan.</div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">{patologi.nama}</h1>
      <div dangerouslySetInnerHTML={{ __html: patologi.deskripsi }} />
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
  

export default PatologiDetail;
