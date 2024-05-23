import Image from 'next/image';
import robot from '../../public/robot.svg';
import Link from 'next/link'

export default function Header() 
{
    return (
        /* header bar */
        <header className='flex flex-row justify-between text-xl p-6'>
            <Link href="/" className='flex flex-row'>
                <span className='text-2xl underline decoration-wavy'>A Bored Techie</span>
                <Image 
                    src={robot}
                    alt=""
                    width={40}
                    height={40}
                />
            </Link>
            <Link href="/resume" className="no-underline hover:underline">Resume</Link>
            <Link href="/blog" className="no-underline hover:underline">Blog</Link>
            <Link href="/about" className="no-underline hover:underline">About</Link>
        </header>
    );
}