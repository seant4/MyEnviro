import React from 'react';
import './learn.css';

function Learn(){
    return(
        <div className="learnText" style={{padding: '20px'}}>
            <h1 className="learnText">Its our Earth</h1>
            <h2 className="learnText">There is only one Earth, and thats the one you and me live on. It's important to take care of it like our own house or car.</h2>
            <h1 className="learnText">Whats the big deal</h1>
            <h2 className="learnText">Everything we do has a consequence, and as technology advances the things we do can have larger impacts</h2>
            <h2><ul>
                    <li className="learnText">
                        The poor disposal of trash and plastic items hurt and damage the wildlife and ecosystems
                    </li>
                    <li className="learnText">
                        The Excessive use of non renewable resources damages the enviroment
                    </li>
                    <li className="learnText">
                        Cars, and other motor vehicles release Carbon that heats up our planet
                    </li>
            </ul></h2>
            <h1 className="learnText">Heat up our Planet?</h1>
            <h2 className="learnText">Yep, our planet is heating up, and fast. This has lead to wildlive and humans in the northernmost hemisphere to loose their homes, and that soon will make its way down to the rest of the world</h2>
            <h2 className="learnText">If you would like to learn more, check out the webpage at <a href="https://climate.nasa.gov/">NASA</a></h2>
            <h1 className="learnText">So what do these tasks do?</h1>
            <h2 className="learnText">The tasks in this App are small steps you can take in your life to help make our planet a better place. And the more people that use it, the larger and better impact we can have on our home</h2>
        </div>
    )
}

export default Learn;