import axios from "../../../fetch/axios";
import Model from "./model";
import Image from 'next/image';

const Patologi = ({ anatomi }) => {
  if (!anatomi) {
    return (
      <div className="container mx-auto p-4">Patologi tidak ditemukan.</div>
    );
  }
  return (
    <div className="container mx-auto p-15 text-white ">
      {anatomi.foto === "tengkorak.glb" ? (
    <div className="pt-20">
        <Model name={anatomi.foto}/>
    </div>

      ) : (
        <div className="pt-20 w-full justify-center items-center flex">
                    <Image
          src={`/assets/image/${anatomi.foto}`}
          alt={anatomi.nama}
          width={300}
          height={300}
        />
    </div>
    

      )}
      <h1 className="text-xl text-white font-bold">{anatomi.nama}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: anatomi.deskripsi }}
        className="font-light"
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await axios.get(`/anatomi/${id}`);
    if (response.data) {
      return {
        props: {
          anatomi: response.data,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching anatomi data:", error);
  }

  return {
    props: {
      anatomi: null,
    },
  };
}

export default Patologi;
