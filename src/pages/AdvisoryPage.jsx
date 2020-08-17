import React from 'react';
import "./page-styles/advisory.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const AdvisoryPage = () =>{
    return (
     <>
     <div className="container contents pt-5 pb-5">
  <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <h1>Military Advisory for the Entertainment &amp; Defense Industries</h1>
      <h3>Veterans Providing Authenticity and Realism</h3> <br />
      <p>
        At Cold Furnace, we believe in authenticity. We know it is the details
        that matter. Our seasoned team of active duty and military veterans have
        real-world experience to ensure your audience gets nothing less.
      </p>
      <p>
        Now the same team we rely on to make our military-themed video games
        legit is available to lend their training and combat experience to your
        project. From military slang and tech jargon to instruction on combat
        techniques and weapons handling, Cold Furnace military advisors have you
        covered.
      </p>
      <p></p>
      <p>
        Cold Furnace Studios is Veteran operated. Members of Cold Furnace,
        serving and retired, include: Canadian Armed Forces &amp; US Military.
      </p>
      <p>CFHQ NOVA SCOTIA, CANADA</p>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <h1>WHAT WE OFFER</h1>
      <p>
        ⚔ Combat realism
        <br />
        ⚔ Military tactics and strategy
        <br />
        ⚔ Military communications
        <br />
        ⚔ Weapons consultation
        <br />
        ⚔ Use of military vehicles and other equipment
        <br />
        ⚔ Uniform dress and authenticity
        <br />
        ⚔ Consultation on specific conflicts and battlegrounds, current and
        historical
        <br />
      </p>{" "}
      <br />
      <div className="blocks" id="block2">
        <div
          className="twitter-tweet twitter-tweet-rendered"
          style={{
            display: "flex",
            maxWidth: 550,
            width: "100%",
            marginTop: 10,
            marginBottom: 10
          }}
        >
          <iframe
            id="twitter-widget-0"
            scrolling="no"
            frameBorder={0}
            allowTransparency="true"
            allowFullScreen="true"
            className
            style={{
              position: "static",
              visibility: "visible",
              width: 343,
              height: 600,
              display: "block",
              flexGrow: 1
            }}
            title="Twitter Tweet"
            src="https://platform.twitter.com/embed/index.html?dnt=false&embedId=twitter-widget-0&frame=false&hideCard=false&hideThread=false&id=1229816087103102981&lang=en&origin=https%3A%2F%2Fcoldfurnace.com%2Fadvisory.html&theme=light&widgetsVersion=223fc1c4%3A1596143124634&width=550px"
            data-tweet-id={1229816087103102981}
          />
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <h1>CONTACT US</h1>
      <br />
      <a href="mailto:commandpost@coldfurnace.com">
        commandpost@coldfurnace.com
      </a>
      <p>CFHQ NOVA SCOTIA, CANADA</p>
      <br /> <br />
      <p>
        {" "}
        <a href="https://discord.gg/0xis5geZdI3LPQle" target="_blank">
          <img
            src="images/discord.png"
            style={{ width: "50%" }}
            alt="Cold Furnace Discord"
          />
        </a>
      </p>
      <div className="social-icons">
        <a href="https://www.facebook.com/coldfurnacestudios" target="_blank">
          <i className="fa fa-facebook" aria-hidden="true" />{" "}
        </a>
      </div>
      <div className="social-icons">
        <a href="https://twitter.com/cfurnacestudios" target="_blank">
          {" "}
          <i className="fa fa-twitter" aria-hidden="true" />{" "}
        </a>
      </div>
    </div>
  </div>
</div>;

     </>

    )
}
export default AdvisoryPage;