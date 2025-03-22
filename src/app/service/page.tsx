// import { FC } from 'react'

// const Page: FC = () => {
//   return <> <div className="min-h-screen bg-black text-white p-6 text-center">
//   <h1 className="text-3xl font-bold mb-4 text-red-500">Ծառայություններ</h1>
//   <ul className="text-gray-400 space-y-2">
//     <li>✔️ Շարժիչների նորոգում</li>
//     <li>✔️ Էլեկտրական համակարգերի վերանորոգում</li>
//     <li>✔️ Ախտորոշում և համակարգչային դիագնոստիկա</li>
//     <li>✔️ Տեխնիկական սպասարկում և յուղափոխություն</li>
//   </ul>
// </div></>
// }

// export default Page
import Image from 'next/image';

const Page: FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-red-500 animate__animated animate__fadeIn animate__delay-1s">
        Ծառայություններ
      </h1>

      <div className="space-y-6">
        {/* Карточки с изображениями */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { img: "mek.jpg", text: "Շարժիչների նորոգում: Մեր մասնագետները կատարում են ամբողջական շարժիչի նորոգում՝ օգտագործելով ամենահուսալի բաղադրիչներ:" },
            { img: "erku.jpg", text: "Էլեկտրական համակարգերի վերանորոգում: Ներառյալ մարտկոցներ, լամպեր և այլ համակարգեր, որոնք ապահովում են մեքենայի աշխատանքը:" },
            { img: "ereq.jpg", text: "Ախտորոշում և համակարգչային դիագնոստիկա: Մենք օգտագործում ենք ժամանակակից տեխնոլոգիաներ՝ ձեր մեքենայի սխալները գտնելու համար:" },
            { img: "chors.jpg", text: "Տեխնիկական սպասարկում: Մենք մատուցում ենք ցանկացած տեսակի սպասարկում՝ ըստ մեքենայի ծագման և հատուկ պահանջների:" },
            { img: "hing.jpg", text: "Յուղափոխություն: Կատարում ենք ամենատարբեր տեսակի յուղափոխություն՝ անկախ մեքենայի տարիքից ու բրենդից:" },
          ].map((item, i) => (
            <div key={i} className="relative rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
              <Image
                src={`/${item.img}`}
                alt={`Ավտոնորոգման պրոցես ${i + 1}`}
                width={500}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full text-white p-4">
                <p className="text-lg font-semibold">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
