import about from '../../../public/images/about.png'

export default function Home() {
	return (
		<main>
			<div className="grid lg:w-9/12 md:w-10/12 m-auto nm-inset-neutral-900 rounded-md mt-5 w-10/12">
				<div className='m-auto'>
					<img className='w-[200px]' src={about.src}/>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 lg:w-9/12 md:w-10/12 m-auto'>
					<div className='w-[400px] m-auto nm-inset-neutral-900 rounded-xl mt-5 h-[400px] p-5'>
						<h1 className='font-bold text-3xl text-center text-neutral-300'>2016</h1>
					</div>
					<div className='w-[400px] m-auto nm-inset-neutral-900 rounded-xl mt-5 h-[400px] p-5'>
						<h1 className='font-bold text-3xl text-center text-neutral-300'>2017</h1>
					</div>
					<div className='w-[400px] m-auto nm-inset-neutral-900 rounded-xl mt-5 h-[400px] p-5'>
						<h1 className='font-bold text-3xl text-center text-neutral-300'>2019</h1>
					</div>
					<div className='w-[400px] m-auto nm-inset-neutral-900 rounded-xl mt-5 h-[400px] p-5'>
						<h1 className='font-bold text-3xl text-center text-neutral-300'>2021</h1>
					</div>
					<div className='w-[400px] m-auto nm-inset-neutral-900 rounded-xl mt-5 h-[400px] p-5'>
						<h1 className='font-bold text-3xl text-center text-neutral-300'>2022</h1>
					</div>
					<div className='w-[400px] m-auto nm-inset-neutral-900 rounded-xl mt-5 h-[400px] p-5'>
						<h1 className='font-bold text-3xl text-center text-neutral-300'>2023</h1>
					</div>
				</div>
		</main>
	)
}