import Image from 'next/image';
import robot from '../../public/robot.svg';
import Link from 'next/link'

export default function Header() 
{
    return (
        /* header bar */
        <header className='flex flex-row flex-wrap justify-between text-4xl mx-6 mt-6'>
            <Link href="/" className='flex flex-row'>
                <span className='text-5xl underline decoration-wavy'>A Bored Techie</span>
                <Image 
                    src={robot}
                    alt=""
                    width={40}
                    height={40}
                />
            </Link>
            <Link href="/blog" className="no-underline hover:underline">Blog💬</Link>
            <a href="https://drive.google.com/file/d/1AQb2tJQAZ5I5PHLCQjCBB9AfG9oM3iGW/view?usp=sharing" target="_blank" className="no-underline hover:underline">Resume✏️</a>
            <Link href="/contact" className="no-underline hover:underline">Contact📞</Link>
        </header>
    );
}