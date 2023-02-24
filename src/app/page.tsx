import intro from '../../public/images/intro.png'
import { AiFillLinkedin, AiFillMail, AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
		<div className='my-10'>
			<div className='w-[400px] h-[400px] m-auto nm-flat-neutral-900 rounded-xl mt-5 p-5'>
				<img className='m-auto w-[200px]' src={intro.src} alt='My avatar'/>
				<div className='text-neutral-200'>
					<h1 className='text-center font-bold text-xl'>Daniel Chung</h1>
					<p className='text-center text-neutral-400 mt-2'>Full stack developer, passionate about building stunning web applications to change the world.</p>
				</div>
				<div className='flex m-auto w-1/3 justify-between text-neutral-200 mt-5 text-xl'>
					<Link href="https://www.linkedin.com/in/danielchungg/" target="_blank">
						<AiFillLinkedin/>
					</Link>
					<Link href="https://github.com/pikachungg" target="_blank">
						<AiOutlineGithub/>
					</Link>
					<a href="mailto:dec8768@rit.edu">
						<AiFillMail/>
					</a>
				</div>
			</div>
			<div className='mt-10 mb-1'>
				<div className='grid 2xl:grid-cols-3 xl:w-10/12 lg:w-10/12 m-auto grid-cols-1 lg:grid-cols-2 gap-y-10'>
					<div className='w-[400px] m-auto nm-flat-neutral-900 rounded-xl mt-5 h-[400px] p-5 grid place-items-center font-bold tracking-widest'>
						<h1 className='text-[800%] text-neutral-400'>SL2</h1>
					</div>
					<div className='w-[400px] m-auto nm-flat-neutral-900 rounded-xl mt-5 h-[400px] p-5 grid place-items-center font-bold tracking-widest'>
						<h1 className='text-[800%] text-neutral-400'>ER</h1>
					</div>
					<div className='w-[400px] m-auto nm-flat-neutral-900 rounded-xl mt-5 h-[400px] p-5 grid place-items-center font-bold tracking-widest'>
						<h1 className='text-[800%] text-neutral-400'>VAIN</h1>
					</div>
					<div className='w-[400px] m-auto nm-flat-neutral-900 rounded-xl mt-5 h-[400px] p-5 grid place-items-center font-bold tracking-widest'>
						<h1 className='text-[800%] text-neutral-400'>C-19</h1>
					</div>
				</div>
			</div>
		</div>
    </main>
  )
}
