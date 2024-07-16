import Link from "next/link";
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col gap-y-6 w-1/2">
            <Link href="https://flowbite.com/" passHref>
              <div className="flex items-center cursor-pointer">
                <Image src={'/assets/image/logo.png'} className="h-8 me-3" alt="FlowBite Logo" width={32} height={32}/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500">MusTerm</span>
              </div>
            </Link>
            <div class="flex flex-col ml-4 text-white ">

            <small className="w-3/4 fs-6 items-center mb-4 font-light">
                Kamus Digital Terminologi Medis Sistem Muskuloskeletal, platform terdepan yang dirancang khusus untuk memudahkan para profesional medis, pelajar, dan siapa saja yang tertarik dalam bidang medis untuk memahami terminologi yang kompleks dan spesifik.
            </small>
            <div class="flex flex-col gap-y-1 text-sm">
                <h2 class="font-semibold ">
                    Ucapan Terimakasih Kepada
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                <span className="hover:underline cursor-pointer">Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi</span>
                </li>
                <li className="mb-1">
                    <span className="hover:underline cursor-pointer">Kemahasiswaan Dikti</span>
                </li>
                <li>
                  <Link href="https://discord.gg/4eeurUVvTy">
                    <span className="hover:underline cursor-pointer">Universitas Dian Nuswantoro</span>
                  </Link>
                </li>
              </ul>
            </div>
        </div>

          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="https://www.instagram.com/pkmkc.musterm"
                target="_blank">
                    <span className="hover:underline cursor-pointer">Instagram</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://www.youtube.com/@MusTerm/videos">
                    <span className="hover:underline cursor-pointer">Youtube</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.tiktok.com/@musterm_" target="_blank">
                    <span className="hover:underline cursor-pointer">Tiktok</span>
                  </Link>
                </li>
                <li>
                <Link href="https://x.com/pkmkc_musterm" target="_blank">
                    <span className="hover:underline cursor-pointer">X</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contact Us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="https://wa.me/+6285701854470?text=Permisi" target="_blank">
                    <span className="hover:underline cursor-pointer">+62 857 0185 4470</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://wa.me/+6287772288998?text=Permisi" target="_blank">
                    <span className="hover:underline cursor-pointer">+62 877 7228 8998</span>
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024
            <Link href="https://flowbite.com/">
              <span className="hover:underline cursor-pointer"> MusTerm - PKM KC </span>
            </Link>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
