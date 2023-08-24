import { Link } from 'react-router-dom'
import '../App.css'
import Wedding1 from '../assets/Wedding/crop_center1.png'
import Wedding2 from '../assets/Wedding/crop_center2.png'
import Wedding3 from '../assets/Wedding/crop_center3.png'
import Wedding4 from '../assets/Wedding/crop_center4.png'
import Wedding5 from '../assets/Wedding/crop_center5.png'
import Wedding6 from '../assets/Wedding/crop_center6.png'
import Wedding7 from '../assets/Wedding/crop_center17.png'
import Wedding8 from '../assets/Wedding/crop_center8.png'
import Wedding9 from '../assets/Wedding/crop_center9.png'
import MainLayout from '../layouts/MainLayout'


const Wedding =()=>{
    return(
        <MainLayout>
        <section className="py-16">
            <div className="container mx-auto">
                <div className="mb-5">
                    <h2 className="text-3xl font-bold">Wedding</h2>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div className="">
                        <figure className='aspect-square rounded-xl overflow-hidden'>
                            <img  className="w-full h-full object-cover" src={Wedding1} alt="Photo by busi" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Jackelyn Formal Crepe Wrap Mermaid Dress</h3>
                                <h4 className="font-bold text-3xl mt-2 ">5110.50 ZAR</h4>

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
                            <img  className="w-full h-full object cover" src={Wedding2} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Mariah Formal Sequin Mesh Mermaid Dress</h3>
                                <h4 className="font-bold text-3xl mt-2">1514.00 ZAR</h4>

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
                            <img  className="w-full h-full object cover" src={Wedding3} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Lyla Formal One-Shoulder Sequin Dress</h3>
                                <h4 className="font-bold text-3xl mt-2">2795.28 ZAR</h4>

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
                            <img  className="w-full h-full object cover" src={Wedding4} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Larisa Formal Chiffon Strapless Crepe Dress</h3>
                                <h4 className="font-bold text-3xl mt-2">1904.60 ZAR</h4>

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
                            <img  className="w-full h-full object cover" src={Wedding5} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Casual Glam Rhinestone Chrome Sandals</h3>
                                <h4 className="font-bold text-3xl mt-2">2396.64 ZAR</h4>

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
                            <img  className="w-full h-full object cover" src={Wedding6} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Patricia Formal Crepe Marabou Long Dress</h3>
                                <h4 className="font-bold text-3xl mt-2">2376.71 ZAR</h4>

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
                            <img  className="w-full h-full object cover" src={Wedding7} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Cora Lace V-Neck Mermaid Formal Dress</h3>
                                <h4 className="font-bold text-3xl mt-2">1889.99 ZAR</h4>

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
                            <img  className="w-full h-full object cover" src={Wedding8} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Cora Lace V-Neck Mermaid Formal Dress</h3>
                                <h4 className="font-bold text-3xl mt-2">1321.68 ZAR</h4>

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
                            <img  className="w-full h-full object cover" src={Wedding9} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Bethanie Formal Sequin V-Neck Mermaid Dress</h3>
                                <h4 className="font-bold text-3xl mt-2">7115.68 ZAR</h4>

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
export default Wedding