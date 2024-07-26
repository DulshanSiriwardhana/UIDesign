import logo from '../images/Logo.png';
const NavBar=()=>{

    return(
        <div className="h-[58.76px] bg-white flex items-center justify-center">
            <div className='flex justify-between w-[90%]'>
                <div className='flex justify-center items-center'>
                    <a href='/'><img className='w-16 md:w-32 sm:w-40' src={logo}></img></a>
                </div>
                <div className='flex text-[8px] md:text-[16px] sm:text-[12px] md:gap-4 sm:gap-2 gap-1 items-center justify-center'>
                    <a href='/home'>Home</a>
                    <a href='/features'>Features</a>
                    <a href='community'>Community</a>
                    <a href='blog'>Blog</a>
                    <a href='pricing'>Pricing</a>
                    <button className='bg-green-500 p-2 rounded-md w-20 md:w-40 sm:w-32'>Register Now</button>
                </div>
            </div>
        </div>
    );
}
export default NavBar;