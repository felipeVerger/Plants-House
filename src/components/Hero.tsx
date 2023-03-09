import { heroImage } from "../assets"
import { heroCards } from "../constants"

const Hero = () => {
  return (
    <section className='w-full h-screen relative mx-auto'>
      <div className='w-full flex justify-between items-center mt-12 px-60'>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h1 className='text-white text-[64px] font-bold'>Grow Your <br/>Own <span className='text-lime-500'>Favorite</span> <br/>Plant</h1>
          <p className='text-white text-[24px] font-medium'>We help you to find and grow the<br/> perfect plant for a beautiful garden</p>
        </div>
        <div className="bg-white w-96 h-96 rounded-full overflow-hidden shadow-xl shadow-slate-100">
          <img src={heroImage} alt="hero" className="w-full h-full object-contain"/>
        </div>
      </div>

      <div className="w-full absolute bottom-0 flex justify-between items-center gap-9 px-56">
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