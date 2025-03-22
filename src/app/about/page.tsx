import { FC } from 'react'
import Image from 'next/image';

const Page: FC = () => {
  return <><div className="min-h-screen bg-black text-white p-6 text-center">
  <h1 className="text-3xl font-bold mb-4 text-red-500">Մեր Մասին</h1>
  <p className="text-gray-400 mb-6">Մենք աշխատում ենք ավտոնորոգման ոլորտում արդեն ավելի քան 10 տարի։
    Մեր թիմը բաղկացած է փորձառու մասնագետներից, որոնք երաշխավորում են բարձրակարգ սպասարկում։
    Մենք հատուկ ուշադրություն ենք դարձնում որակին և հաճախորդների բավարարվածությանը:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {["mek.jpg", "erku.jpg", "ereq.jpg", "chors.jpg", "hing.jpg"].map((image, i) => (
    <div key={i} className="w-full h-60 relative">
      <Image
        src={`/${image}`}
        alt="Ավտոնորոգման պրոցես"
        width={500}  // Укажи реальные размеры
        height={300} // Укажи реальные размеры
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
  ))}
</div>
</div></>
}

export default Page
