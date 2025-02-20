import { FC, memo } from 'react';
import { githubLink } from "../data/data";


const Socials: FC = memo(() => {
    const { label, Icon, href } = githubLink;
    return (
        <>
            {'Check out the source code for this site!'}
            &nbsp;&nbsp;
            {'→'}
            <a
                aria-label={label}
                className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500  sm:-m-3 sm:p-3"
                href={href}
            >
                <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
            </a>

        </>
    );
});

Socials.displayName = 'Socials';
export default Socials;
