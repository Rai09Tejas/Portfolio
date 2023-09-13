import React from 'react';
// import heroImg from '../../images/hero.svg';
// import frontimageImg from '../../images/frontimage.svg';
import pp from '../../images/pp.jpg';
// import nodedotjsImg from '../../images/nextdotjs.svg';



import CountUp from 'react-countup';


const Hero = () => {
    const [title, setTitle]= React.useState("hasan Iqbal");
    React.useEffect(()=>{
           
            setTitle(document.title=title);
       
    }, [window.onload])
  
    return (
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* her left start */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600]
                        text-[25px]'>Hi,
                        </h5>

                        <h1 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[800]
                        text-[1.8rem] sm-text[40px] leading-[35px] sm:leading-[46px] mt-5'>I'm Tejas Rai <br /> A Electronics & Telecommunication Engineering Graduate
                        </h1>

                        <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='150' className='flex items-center gap-6 mt-7'>
                            <a href='#contact'><button className='flex items-center gap-2 bg-black text-white font-[600] border border-solid
             py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor ease-in duration-100'><i class='ri-mall-line'></i>Hire Me</button></a>

                            <a href='#portfolio' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>See Portfolio</a>
                        </div>

                        <div data-aos='fade-left' data-aos-duration='1500' className='mt-12'>
                            <div className='flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10' >
                                <span className='ri-apps-2-line'></span>
                                <b>"Dedicated Programmer | Freelance Android Developer | Continuous Learner Ready to Dive into Code!"</b>
                            </div>
                            <div className='flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                                <span className='ri-apps-2-line'></span>
                                <b>I'm a dedicated programmer with a deep passion for Android development. As a freelancer, I thrive in challenging work environments and am always eager to expand my skill set and knowledge. I'm on a constant quest for new opportunities to learn and grow in the world of coding. Let's connect and embark on an exciting coding journey together!</b>
                            </div>
                        </div>
                        <div className='flex items-center gap-9 mt-14'>
                            <span className='text-smallTextColor text-[20px] font-[600]'>Connect</span>
                            <span><a title='instagram' target='_blank' href='mailto:rai09tejas@gmail.com' className='text-smallTextColor text-[25px] font-[600]'><i class="ri-mail-fill"></i></a></span>
                            <span><a  title='github' target='_blank' href='https://github.com/Rai09Tejas' className='text-smallTextColor text-[25px] font-[600]'><i class='ri-github-line'></i></a></span>
                            <span><a title='LinkedIn' target='_blank' href='https://www.linkedin.com/in/tejas-rai-t9' className='text-smallTextColor text-[25px] font-[600]'><i class='ri-linkedin-box-fill'></i></a></span>
                        </div>
                    </div>
                    {/* hero left end */}

                    {/* hero img */}
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center '><img src={pp} alt='' /></figure>
                    </div>
                    {/* hero img end */}

                    {/* hero image content right */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col
                        md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <span><a href='#reactjs' className='text-smallTextColor text-[80px] '><i class="ri-reactjs-fill"></i></a></span>
                            <CountUp className='text-headingColor font-[600] bold text-[20px]' start={0} end={60} duration={3} suffix='%' />
                        </div>
                        <div className='mb-10'>
                            <span><a href='#javascript' className='text-smallTextColor text-[80px]'><i class="ri-javascript-fill"></i></a></span>
                            <CountUp className='text-headingColor font-[600] bold text-[20px]' start={0} end={70} duration={3} suffix='%' />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Hero;
