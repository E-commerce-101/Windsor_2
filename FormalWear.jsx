import './App.css'
import Formal1 from '../assets/Formal wear/formal1.png'
import Formal2 from '../assets/Formal wear/formal2.png'
import Formal3 from '../assets/Formal wear/formal3.png'
import Formal4 from '../assets/Formal wear/formal4.jpg'
import Formal5 from '../assets/Formal wear/formal5.jpg'
import Formal6 from '../assets/Formal wear/formal6.jpg'
import Formal7 from '../assets/Formal wear/formal7.jpg'
import Formal8 from '../assets/Formal wear/formal8.jpg'
import Formal9 from '../assets/Formal wear/formal9.jpg'
import MainLayout from '../layouts/MainLayout'

const FormalWear =()=>{
    return(
        <MainLayout>
        <section className="py-16">
            <div className="container mx-auto">
                <div className="mb-5">
                    <h2 className="text-3xl font-bold">Formal Wear</h2>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div className="">
                        <figure className='aspect-square rounded-xl overflow-hidden'>
                            <img  className="w-full h-full object-cover" src={Formal1} alt="Photo by busi" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Sleek And Stylish Crepe Jumpsuit</h3>
                                <h4 className="font-bold text-3xl mt-2 ">110.50 ZAR</h4>

                            </div>
                            
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Formal2} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Taking the Plunge Scoop Neck Midi Dress</h3>
                                <h4 className="font-bold text-3xl mt-2">514.00 ZAR</h4>
                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                              <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Formal3} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Something More High Waist Ponte Pencil Skirt</h3>
                                <h4 className="font-bold text-3xl mt-2">295.28 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Formal4} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Perfectly Posh Tie-Waist Jumpsuit</h3>
                                <h4 className="font-bold text-3xl mt-2">204.60 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Formal5} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Biz Call 3/4 Sleeve Boyfriend Blazer</h3>
                                <h4 className="font-bold text-3xl mt-2">396.64 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Formal6} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Polish Up Real Nice Long Blazer</h3>
                                <h4 className="font-bold text-3xl mt-2">376.71 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Formal7} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Preppy Plaid Faux Suede Blazer</h3>
                                <h4 className="font-bold text-3xl mt-2">289.99 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Formal8} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Boss Babe Crepe Longline Blazer</h3>
                                <h4 className="font-bold text-3xl mt-2">221.68 ZAR</h4>

                            </div>
                            <button className="bg-current px-4 rounded-lg aspect-square w-fit h-full">
                                <span className="material-symbols-outlined text-white">local_mall</span>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <figure className="aspect-square rounded-xl overflow-hidden">
                            <img  className="w-full h-full object cover" src={Formal9} alt="" />
                        </figure>
                        <div className="flex justify-between mt-4 items-centre">
                            <div className="">
                                <h3 className="font-medium text-xl mt-0">Bethanie Formal Sequin V-Neck Mermaid Dress</h3>
                                <h4 className="font-bold text-3xl mt-2">115.68 ZAR</h4>

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
  export default FormalWear
