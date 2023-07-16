import "./blogStyle.scss"

function Blog() {
    return(
        <>
         <div className="page-blog">
            <center>
                <h2>From My Blog</h2>
                <h1>Our Recent Updates, Blog, Tips, Tricks & More</h1>
            </center>
            <div className="box-img">
                <div className="box-UI">
                <img src="/IMG/Photo_UI.png" alt="" />
                <div className="img-text">
                <h2>UI/UX Design</h2>
                <p>
                User interface design or user interface <br></br> engineering
                </p>
                </div>
                </div>
                <div className="box-design">
                    <img src="/IMG/Photo_Design.png" alt="" />
                    <div className="img-text">
                <h2>UI/UX Design</h2>
                <p>
                User interface design or user interface <br></br> engineering
                </p>
                </div>
                </div>
                <div className="box-web">
                    <img src="/IMG/Photo_web.png" alt="" />
                    <div className="img-text">
                <h2>UI/UX Design</h2>
                <p>
                User interface design or user interface <br></br> engineering
                </p>
                </div>
                </div>
            </div>
         </div>
        </>
    )
}
export default Blog