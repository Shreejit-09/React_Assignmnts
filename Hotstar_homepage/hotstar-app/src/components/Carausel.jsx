import React from "react";

function Carausel() {
    return (
        <div>
            <div className="carausel">
                <button className="reverseBtn"> &lt; </button>
                <div className="carauselPage">
                    <div className="carauselPageDescription">
                        <div>
                        <h1>Highlights:Masterclass from MSD helps CSK retain the Championship</h1>
                        <h3>Indian Premier League 2021</h3>
                        <p>A finishing hit from Thalla ensures CSK's thumping win over arch rival MI</p>
                        </div>
                    </div>
                    <div className="carauselShade"></div>
                    <a href="#"><img src="https://static.toiimg.com/thumb/msid-86928617,width-1200,height-900,resizemode-4/.jpg" className="carauselImg" alt="MSD hitting winning shot"/></a>
                </div>
                <button className="forwardBtn"> &gt; </button>
            </div>
        </div>
    );
}
export default Carausel;