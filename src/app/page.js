import MainNav from "@/components/mainNav";
import PostCard from "@/components/postCard";
import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <main className="mt-5">
        <header>
          <div className="relative h-[15rem] md:h-[20rem] w-[95%] max-w-[150rem] mx-auto rounded-lg overflow-clip drop-shadow-lg">
            <Image 
              className="brightness-50 select-none"
              layout="fill"
              objectFit="cover" 
              alt="Background image for effect" 
              src={'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
              draggable={false}
              >
            </Image>

          
            <div className="absolute w-full top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                <h1 className="text-center text-white font-bold text-2xl md:text-4xl lg:text-5xl">Freedom to Post, Respect to All</h1>
                <p className="w-[90%] lg:w-[80%] mx-auto text-center text-white font-thin text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem]">Express yourself without barriers. Share your thoughts, ideas, and stories instantly – no sign-ups, no hassle. A community built on free speech with respect for all.</p>
                <div className="flex justify-center space-x-2 mt-3 md:space-x-3 md:mt-8">
                    <Link href={'/posts'} 
                    className="text-black flex items-center gap-1 bg-white border border-white px-3 py-2 lg:px-4 lg:py-3 rounded-sm text-sm md:text-[1.1rem] lg:text-[1.3rem] hover:bg-black hover:text-white transition-all duration-150">
                    View posts<FontAwesomeIcon className="h-5 w-5 md:w-6 md:h-6 lg:w-7 lg:h-7" icon={faEye}></FontAwesomeIcon></Link>
                    <Link href={'/posts/create'} className="text-white flex items-center gap-1 border border-white px-3 py-2 lg:px-4 lg:py-3 rounded-sm text-sm md:text-[1.1rem] lg:text-[1.3rem] hover:bg-white hover:text-black transition-all duration-150">Create post <FontAwesomeIcon icon={faPenToSquare} className="h-5 w-5 md:w-6 md:h-6 lg:w-7 lg:h-7"></FontAwesomeIcon></Link>
                </div>
            </div>
          </div>
          
        </header>
        <section>
            <MainNav></MainNav>
            <div className="w-[95%] mx-auto grid gap-y-5 grid-cols-1 md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr]">
                <PostCard short_title={'This is my title!'} 
                          content={'Contetn'}
                          author={'Peter Packa'}
                          shares={0}
                          likes={200}
                          views={300}
                          date={'2025.5.2'}
                          post_url={'/posts/cool'}

                ></PostCard>
 
            </div>
        </section>
        
    </main>
  );
    
}
