import DataImage from "./data"
import {listTools} from "./data"

function App() {

  return ( 
  <>
  <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
    <div>
      <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-b-md" />
        <q>Tidak ada yang tidak bisa, kecuali tidak mau.✌</q>
      </div>
      <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Ariel Fazle Mawla Bryan Adams</h1>
      <p className="text-base/loose mb-6 opacity-50">
      I am a Computer Systems undergraduate at Gunadarma University with strong interests in Networking, Embedded Systems, and Internet of Things (IoT). I have worked on projects such as fire detection systems, drowsiness detection, hand tracking applications, and network simulations using Cisco routers.
      
      
      </p>
      <div className="flex items-center sm:gap-4 gap-2">
        <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i class="ri-download-line ri-lg"></i></a>
        <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">View Project <i class="ri-arrow-down-line ri-lg
        "></i></a>
      </div>

    </div>
    <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
  </div>

  {/* tentang/about */}
    <div className="About mt-32 py-10">
      <div className="xl:w-2/3 lg:w-3/4 w-full w-2/3 mx-auto p-7 bg-zinc-800 rounded-lg">
         <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden"/>
        <p className="text-base/loose mb-10">
        I am a Computer Systems undergraduate at Gunadarma University with strong interests in Networking, 
        Embedded Systems, and Internet of Things (IoT). I have worked on projects such as fire detection systems, 
        drowsiness detection, hand tracking applications, and network simulations using Cisco routers.
        I gained industry exposure through an internship at PT PLN (Persero) and have hands-on experience
        with Cisco and MikroTik networking technologies. I also earned the Garuda Competency Certification (LSP),
         which covered network cabling installation (UTP straight-through, crossover, and fiber optic), Cisco network configuration including static routing, DHCP, and VoIP trunking, as well as MikroTik deployment involving DHCP, DNS, firewall, hotspot, and network services configuration.
        Currently, I am focused on building my technical portfolio, strengthening my networking skills, 
        and developing my personal brand to prepare for a career in Network Engineering and IT Infrastructure.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden"/>
          <div>
            <div>
             <div className="flex items-center gap-6>">
              <h1>
                <span> </span>
                </h1>
                <p></p>
             </div>
              <h1>
                <span> </span>
                </h1>
                <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4t">Tools yang digunakan</h1>
        <p className="w-2/5 text-base/loose opacity-50">Berikut ini Tools yang saya gunakan</p>
        <div className="tools-box mt-14 grid grid-cols-3 gap-4">

        {listTools.slice(0, 6).map((tool) => (
             <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
             <img src="" alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
             <div>
               <h4>Nama Tools</h4>
               <p>Embedded System</p>
             </div>
           </div>
        ))}
        
        </div>  
      </div>
    </div>
  {/* tentang/about */}

  </>
  )
}

export default App
