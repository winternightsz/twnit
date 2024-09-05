import Image from 'next/image';

export default function AccsCard ({ nome, descricao, linkNitter, foto }) {
    return (
<div className="bg-white rounded-lg shadow-[inset_3px_3px_10px_0px_#00000010,7px_7px_8px_0px_#00000024] ">
    <a href="#" className="flex flex-col rounded-t-lg justify-center items-center p-5 ">
        <Image
              src={foto}
              alt={nome}
              width={100}
              height={100}
              className="rounded-full ring-2 ring-gray-300 shadow-md bg-gray-200"
        />
        {/* <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />*/}
    </a>
    <div className="p-5 flex justify-center items-center ">
        <div className="text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-twOfficial ">{nome}</h5>
        <p className="mb-3 font-normal text-twOfficial ">{descricao}</p>
        <a href={linkNitter} className="inline-flex shadow-[1px_1px_15px_0px_#f687b3] items-center px-3 py-2 text-sm font-medium text-center text-white bg-twOfficial rounded-lg hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-bg-pink-400  ">
            Nitter Link
        </a>
        </div>
    </div>
</div>
    );
}