import illustraion from '../images/Illustration.png'
const LandingPage=()=>{

    return(
        <div className="bg-[#F5F7FA] h-screen w-full">
            <div>
                <img src={illustraion}/>
            </div>
            <div className='w-full border flex justify-center items-center'>
                <div className='w-[80%] flex flex-col justify-around'>
                    <h1 className='text-2xl'>Lessons and insights</h1>
                    <h1 className='text-2xl text-green-500'>from 8 years</h1>
                    <h2 className='text-[6px]'>Where to grow your business as a photographer: site social media?</h2>
                    <button className='text-[8px] bg-green-500 w-20 h-6 rounded-sm'>Register</button>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;