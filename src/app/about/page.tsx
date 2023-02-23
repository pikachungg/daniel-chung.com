import about from '../../../public/images/about.png'

export default function Home() {
	return (
		<main>
			<div className="lg:w-6/12 xl:w-4/12 md:w-10/12 m-auto nm-inset-neutral-900-sm rounded-md p-5 mt-5 w-10/12">
				<img className='w-[200px] m-auto' src={about.src}/>
			</div>
		</main>
	)
}