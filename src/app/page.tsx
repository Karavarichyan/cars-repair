// import { FC } from 'react'

// const Page: FC = () => {
//   return <>Home</>
// }

// export default Page


// import { FC } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Page: FC = () => {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <header className="p-4 bg-red-600 text-center text-xl font-bold">
//         Ավտոնորոգման Կենտրոն
//       </header>
//       <nav className="flex justify-center space-x-6 p-4 bg-gray-900">
//         <Link href="/about" className="hover:text-red-500">Մեր Մասին</Link>
//         <Link href="/services" className="hover:text-red-500">Ծառայություններ</Link>
//       </nav>
//       <main className="p-6 text-center">
//         <h1 className="text-3xl font-bold mb-4">Բարի գալուստ Ավտոնորոգման Կենտրոն</h1>
//         <p className="text-gray-400 mb-6">Մենք առաջարկում ենք լավագույն ծառայությունները ձեր մեքենայի համար</p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//   {["mek.jpg", "erku.jpg", "ereq.jpg", "chors.jpg", "hing.jpg"].map((image, i) => (
//     <div key={i} className="w-full h-60 relative">
//       <Image
//         src={`/${image}`}
//         alt="Ավտոնորոգման պրոցես"
//         width={500}
//         height={300}
//         className="rounded-lg object-cover w-full h-full"
//       />
//     </div>
//   ))}
// </div>
//       </main>
//       <footer className="p-4 bg-gray-900 text-center text-gray-500">
//         &copy; 2025 Ավտոնորոգման Կենտրոն. Բոլոր իրավունքները պաշտպանված են.
//       </footer>
//     </div>
//   );
// };

// export default Page;
import { FC } from 'react';
import Image from 'next/image';

const Page: FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Բարի գալուստ Ավտոնորոգման Կենտրոն</h1>
        <p className="text-gray-400 mb-6">Մենք առաջարկում ենք լավագույն ծառայությունները ձեր մեքենայի համար</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-full h-60 relative">
              <Image
                src="/mek.jpg"
                alt="Ավտոնորոգման պրոցես"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="text-left text-gray-300">
              <h2 className="text-xl font-semibold mb-2">Առաջարկվող ծառայություններ</h2>
              <p>Մենք մասնագիտացված ենք ավտոմեքենաների ամբողջական նորոգման մեջ՝ ներսից մինչև դրսից: Մենք օգտագործում ենք նորագույն տեխնոլոգիաներ և բարձրորակ նյութեր:</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-full h-60 relative">
              <Image
                src="/erku.jpg"
                alt="Ավտոնորոգման պրոցես"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="text-left text-gray-300">
              <h2 className="text-xl font-semibold mb-2">Մեր թիմը</h2>
              <p>Մեր թիմը բաղկացած է փորձառու մասնագետներից, որոնք առավոտից երեկո աշխատում են, որպեսզի ձեր մեքենան կրկին լինի կատարյալ վիճակում:</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-full h-60 relative">
              <Image
                src="/ereq.jpg"
                alt="Ավտոնորոգման պրոցես"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="text-left text-gray-300">
              <h2 className="text-xl font-semibold mb-2">Որակի ապահովում</h2>
              <p>Մեր բոլոր ծառայությունները համապատասխանում են միջազգային որակի չափանիշներին՝ ապահովելով երկարաժամկետ արդյունք:</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-full h-60 relative">
              <Image
                src="/chors.jpg"
                alt="Ավտոնորոգման պրոցես"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="text-left text-gray-300">
              <h2 className="text-xl font-semibold mb-2">Մեքենայի ստուգում</h2>
              <p>Մենք առաջարկում ենք անվճար ստուգում ձեր մեքենայի ընդհանուր վիճակի վերաբերյալ, որպեսզի պարզենք բոլոր հնարավոր խնդիրները:</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-full h-60 relative">
              <Image
                src="/hing.jpg"
                alt="Ավտոնորոգման պրոցես"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="text-left text-gray-300">
              <h2 className="text-xl font-semibold mb-2">Երբ անհրաժեշտ է ավտոնորոգում</h2>
              <p>Եթե ձեր մեքենան ունի փոքրիկ խնդիրներ կամ լուրջ անսարքություններ, մենք կարող ենք օգնել ձեզ արագ և արդյունավետ լուծումներ առաջարկելու հարցում:</p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Page;
