import Picture_1 from '../assets/Shoes/picture1.jpg'
import Picture_2 from '../assets/Shoes/picture2.jpg'
import Picture_3 from '../assets/Shoes/picture3.jpg'
import Picture_4 from '../assets/Shoes/picture4.jpg'
import Picture_5 from '../assets/Shoes/picture5.jpg'
import Picture_6 from '../assets/Shoes/picture6.jpg'
import Picture_7 from '../assets/Shoes/picture7.jpg'
import Picture_8 from '../assets/Shoes/picture8.jpg'
import Picture_9 from '../assets/Shoes/picture9.jpg'
import MainLayout from '../layouts/MainLayout'

const Shoes =()=>{
    return(
        <MainLayout>
        <section className="py-16">
            <div className="container mx-auto">
                <div className="mb-5">
                    <h2 className="text-3xl font-bold">Shoes</h2>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div className="">
                        <figure className='aspect-square rounded-xl overflow-hidden'>
                            <img  className="w-full h-full object-cover" src={Picture_1} alt="Photo by busi" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Signature Glam Rhinestone Spiral Stiletto Heels</h3>
                                <h4 className="font-bold text-3xl mt-2 ">710.50 ZAR</h4>

                            </div>
                            
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Picture_2} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Natural Weave Low Block Heels</h3>
                                <h4 className="font-bold text-3xl mt-2">514.00 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Picture_3} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Glam Amour Faux Pearl Bow Stiletto Pumps</h3>
                                <h4 className="font-bold text-3xl mt-2">795.28 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Picture_4} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Ultimate Glamour Gemstone Spiral Block Heels</h3>
                                <h4 className="font-bold text-3xl mt-2">904.60 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Picture_5} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Casual Glam Rhinestone Chrome Sandals</h3>
                                <h4 className="font-bold text-3xl mt-2">396.64 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Picture_6} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Always Glam Pearl And Rhinestone Sandals</h3>
                                <h4 className="font-bold text-3xl mt-2">776.71 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Picture_7} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Classic Everyday Style Thong Sandals</h3>
                                <h4 className="font-bold text-3xl mt-2">189.99 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Picture_8} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Style Refresh Low Block Heel Mules</h3>
                                <h4 className="font-bold text-3xl mt-2">321.68 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Picture_9} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Back To Basics Faux Leather Ankle Booties</h3>
                                <h4 className="font-bold text-3xl mt-2">715.68 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>



                </div>


            </div>

        </section>
        </MainLayout>

    )
}
export default Shoes