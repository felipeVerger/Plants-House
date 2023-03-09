import { heroImage } from "../assets"
import { heroCards } from "../constants"

const Hero = () => {
  return (
    <section className='w-full h-full relative mx-auto lg:h-screen'>
      <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-4 mt-12 px-24 md:px-36 xl:px-60'>
        <div className='flex flex-col  text-center gap-2 lg:text-left'>
          <h1 className='text-white text-[54px] font-bold xl:text-[64px]'>Grow Your <br/>Own <span className='text-lime-500'>Favorite</span> <br/>Plant</h1>
          <p className='text-white text-[16px] font-medium xl:text-[24px]'>We help you to find and grow the<br/> perfect plant for a beautiful garden</p>
        </div>
        <div className="bg-white w-96 h-96 rounded-full overflow-hidden shadow-xl shadow-slate-100">
          <img src={heroImage} alt="hero" className="w-full h-full object-contain"/>
        </div>
      </div>

      <div className="w-full absolute bottom-0 justify-between items-center gap-9 px-56 hidden 2xl:flex">
        {heroCards.map((hero) => (
          <div key={hero.id} className="bg-white w-48 h-64 rounded-t-full overflow-hidden">
            <img src={hero.image} alt="hero-card" className="w-full h-full object-contain"/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero