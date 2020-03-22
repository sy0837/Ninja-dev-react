import React from 'react';
import './sass/style.scss';

function midSec() {
    return(
        <main>
           <section className="home">
           <div className="Name">
             <h2>Welocme to</h2>
            
            <h1 className="home_name">
                Ninja <span className="home_name-last">Developers</span>
            </h1>
           
        </div>
       
            <footer>
                {/* &copy; Copyright 2020 */}
                <h5>Contact us at:  ninjadev@gmail.com</h5>
            </footer>
        </section>
        </main>
    ) ;
}
export default midSec;