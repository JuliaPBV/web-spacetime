import { getUser } from "@/lib/auth";
import Image from "next/image";

export default async function Profile() {
    const {name, avatarUrl} = await getUser();

 return (
   <div className="flex items-center gap-3 text-left">
        <Image 
        src={avatarUrl} 
        width={40} 
        height={40} 
        alt="" 
        className="w-10 h-10 rounded-full"
        />

        <p className='text-sm leading-snug max-w-[140px]'>
        {name}
        <a href="" className="block text-red-400 hover:text-red-300">Quero sair</a>
        </p>
    </div>
);
}