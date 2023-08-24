import { Link } from 'react-router-dom'
import casual1 from '../assets/Casual/casual1.jpg'
import casual2 from '../assets/Casual/casual2.jpg'
import casual3 from '../assets/Casual/casual3.png'
import casual4 from '../assets/Casual/casual4.jpg'
import casual5 from '../assets/Casual/casual5.png'
import casual6 from '../assets/Casual/casual6.png'
import casual7 from '../assets/Casual/casual7.png'
import casual8 from '../assets/Casual/casual8.png'
import casual9 from '../assets/Casual/casual9.png'
import MainLayout from '../layouts/MainLayout'

const Casual =()=>{
    return(
        <MainLayout>
        <section className="py-16">
            <div className="container mx-auto">
                <div className="mb-5">
                    <h2 className="text-3xl font-bold">Casual</h2>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div className="">
                        <figure className='aspect-square rounded-xl overflow-hidden'>
                            <img  className="w-full h-full object-cover" src={casual1} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Picking Daisies Chiffon Strappy Skater Dress</h3>
                                <h4 className="font-bold text-3xl mt-2 ">1072.88 ZAR</h4>

                            </div>
                            
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                            <Link to='/cart'>
                                <span className="material-symbols-outlined text-white">local_mall</span>
                             </Link>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={casual2} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Major Cutie Cargo Joggers</h3>
                                <h4 className="font-bold text-3xl mt-2">920.50 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                            <Link to='/cart'>
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </Link>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={casual3} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Sleek Sophistication Satin Blazer</h3>
                                <h4 className="font-bold text-3xl mt-2">718.22 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                            <Link to='/cart'>
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </Link>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={casual4} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Major Trendsetter High-Rise Joggers</h3>
                                <h4 className="font-bold text-3xl mt-2">954.00 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                            <Link to='/cart'>
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </Link>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={casual5} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Biker Chic Crop Jacket</h3>
                                <h4 className="font-bold text-3xl mt-2">1074.50 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                            <Link to='/cart'>
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </Link>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={casual6} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Sweet As Me Eyelet Lace Skater Dress</h3>
                                <h4 className="font-bold text-3xl mt-2">544.38 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                            <Link to='/cart'>
                                <span className="material-symbols-outlined text-white">local_mall</span>
                             </Link>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={casual7} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Pink cow girl jacket</h3>
                                <h4 className="font-bold text-3xl mt-2">11268.89 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                            <Link to='/cart'>
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </Link>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={casual8} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Torn blue jean</h3>
                                <h4 className="font-bold text-3xl mt-2">980.66 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                            <Link to='/cart'>
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </Link>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={casual9} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">High waist jean jacket</h3>
                                <h4 className="font-bold text-3xl mt-2">824.00 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                            <Link to='/cart'>
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </Link>
                            </button>
                        </div>

                    </div>



                </div>


            </div>

        </section>
        </MainLayout>

    )
}
export default Casual