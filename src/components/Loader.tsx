import { DotSpinner } from '@uiball/loaders'

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <DotSpinner 
        size={40}
        speed={0.9} 
        color="black" 
      />
    </div>
  )
}

export default Loader