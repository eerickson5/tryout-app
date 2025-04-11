import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/solid'

const TryoutsList = () => {
    const tryouts = [
        { id: 1, teamName: 'Ozone', date: new Date('2023-11-15T14:00:00'), location: 'Springfield, IL' },
        { id: 2, teamName: 'Magma', date: new Date('2023-11-20T16:30:00'), location: 'Rivertown, NY' },
        { id: 3, teamName: 'Roma', date: new Date('2023-11-25T10:00:00'), location: 'Lakeside, CA' },
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
                        <h3 class="text-neutral font-semibold text-lg">{tryout.teamName}</h3>
                        <p className="text-xs uppercase text-primary">
                            {tryout.location} | {tryout.date.toLocaleTimeString('en-US', { 
                                hour: 'numeric', 
                                minute: 'numeric', 
                                timeZoneName: 'short' 
                            })}
                        </p>                     
                    </div>

                     <button className="btn btn-ghost">
                     <InformationCircleIcon className="w-8 h-8" />
                     </button>
                   </li>
                ))}
            </ul>
        </div>
    );
};

export default TryoutsList;