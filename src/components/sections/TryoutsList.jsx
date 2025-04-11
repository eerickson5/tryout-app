import React from 'react';
import TryoutCard from '../TryoutVerticalCard.jsx';

const TryoutsList = () => {
    const tryouts = [
        { id: 1, teamName: 'Wildcats', date: new Date('2023-11-15'), location: 'Springfield, IL' },
        { id: 2, teamName: 'Eagles', date: new Date('2023-11-20'), location: 'Rivertown, NY' },
        { id: 3, teamName: 'Sharks', date: new Date('2023-11-25'), location: 'Lakeside, CA' },
    ];

    return (
        <div className="p-4">
            <ul className="list bg-base-100 rounded-box shadow-md">
            {tryouts.map((tryout) => (
                     <li className="list-row" key={tryout.id}>
                     <h3 className="text-4xl font-thin text-secondary">{tryout.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</h3>
                     <div>
                        <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/>
                        </div>
                     <div className="list-col-grow">
                       <h3 class="text-neutral">{tryout.teamName}</h3>
                       <p className="text-xs uppercase font-semibold text-primary">{tryout.location}</p>
                     </div>
                     <button className="btn btn-square btn-ghost">
                       <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                     </button>
                   </li>
                ))}
            </ul>
        </div>
    );
};

export default TryoutsList;