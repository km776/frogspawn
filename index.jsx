import * as React from "react";
import "./App.css";
import frogcord from "./assets/frogcord.svg";
import discImg from "./assets/discImg.svg";
const App = () => {
  return (  
    <div className="frame-1">
      <div className="bg">
        <div className="flex-container">
          <div className="flex-container-1">
            <span className="frogsin-stem">&lt;frogsinSTEM&gt;</span>
            <img className="frogcord" src={frogcord} />
          </div>
          <div className="flex-container-2">
            <div className="rectangle-3">
              <span className="p1">
                Something bugs us about frogs, and it’s not just the amount of
                puns they have to offer. Around 29% of frog species are
                threatened, according to the 2012 IUCN Red List. frogsinSTEM is
                a Discord bot which aims to raise awareness and educate people
                on endangered frog species. It is a gacha-type game that allows
                users to “collect” frogs and learn about new frog species.
              </span>
            </div>
            <div className="rectangle-3-1">
              <span className="p2">
                This bot will also send links for users to be able to donate to
                environmental conservation websites. If you’re interested in
                adding frogsinSTEM to your server, please click the link below:
              </span>
              <span className="wwwfortniteburgernet">
                www.fortniteburger.net
              </span>
            </div>
          </div>
        </div>
        <img className="disc-img" src={discImg} />
      </div>
    </div>
  );
};
export default App;