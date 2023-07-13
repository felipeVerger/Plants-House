import { FC } from 'react'
import errorImg from '../../assets/errorImage.png';


interface ErrorProps {
  isError?: boolean;
  error?: any
}

const Error: FC<ErrorProps> = ({ isError, error }) => {
  return (
    <div className='w-full h-screen flex justify-center items-center gap-4'>
        <h1>Something went wrong please try again later</h1>
        {isError && <p>{error}</p>}
        <img src={errorImg} alt='sad-plant' className=''/>
    </div>
  )
}

export default Error