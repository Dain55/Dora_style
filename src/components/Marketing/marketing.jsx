import "./markeStyle.scss"
function Marketing() {
    return (
      <>
          <div className="page-pictere">
          <center>Portfolio</center>
          <center className="name-record">My Amazing Works</center>
        <div className="choose-marketing">
          <p>All</p>
          <p>Youtube</p>
          <p>Vimeo</p>
          <p>Soundcloud</p>
          <p>Popup</p>
          <p>Details</p>
        </div>
        <div className="main-grid-pictere">
          <img className="grid-img" src="/IMG/1.png" alt="" />
          <img className="grid-img" src="/IMG/5.png" alt="" />
          <img className="grid-img" src="/IMG/3.png" alt="" />
          <img className="grid-img" src="/IMG/4.png" alt="" />
          <img className="grid-img" src="/IMG/2.png" alt="" />
          <img className="grid-img" src="/IMG/6.png" alt="" />
        </div>
     </div>
      </>
    );
  }
  
  export default Marketing