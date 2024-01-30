import React from "react";
import "../assets/Css/FooterHomePage.css"

function FooterHomePage() {
  return (
    <>
      <footer className="footer">
        <div className="footer-head __container">
          <div className="copyrights">
            <div className="copyrights-title">
              <span className="copyrights-title__first tf1"> © All rights</span>
              <span className="copyrights-title__second tf2 s32"> Reserved</span>
            </div>
            <div className="copyrights-descr ttu">
              <p>
                Please, be informed, that the intellectual property rights to
                all the photos, designs and other materials on this Site belong
                to Private Entrepreneur “Tatiana Malitska”. You may request
                permission to use them by contacting us at:
                shot@tanyatimal.studio
              </p>
            </div>
          </div>
          <div className="designed">
            <span className="designed-text tf1">Photoshoot by Yin Hoang</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterHomePage;
