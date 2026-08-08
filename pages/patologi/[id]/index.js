import axios from "../../../fetch/axios";
import Model from "./model";

import Image from 'next/image';

const Patologi = ({ patologi }) => {
  if (!patologi) {
    return (
      <div className="container mx-auto p-4 mt-20 text-center text-white">Patologi tidak ditemukan.</div>
    );
  }

  const is3D = patologi.foto && patologi.foto.endsWith('.glb');
  const isImage = patologi.foto && patologi.foto.match(/\.(png|jpe?g|webp|gif|svg)$/i);

  return (
    <div className="container mx-auto p-4 md:p-10 lg:p-16 min-h-screen text-white flex items-center justify-center pt-24 animate-fade-up">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 glass-card p-8 pt-10">
        <div className="flex justify-center items-center rounded-2xl overflow-hidden bg-black/40 shadow-inner p-4 min-h-[500px]">
          {is3D ? (
             <Model name={patologi.foto} />
          ) : isImage ? (
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={`/assets/image/${patologi.foto}`}
                alt={patologi.nama}
                width={400}
                height={400}
                className="rounded-xl shadow-lg object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-gray-400">Tidak ada visual tersedia.</p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center space-y-6 lg:pl-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 drop-shadow-sm">
            {patologi.nama}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: patologi.deskripsi }}
            className="prose prose-invert prose-lg max-w-none text-gray-200 font-light leading-relaxed"
          />
        </div>
      </div>
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
            patologi: response.data?.data !== undefined ? response.data.data : response.data,
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
