import React from "react";
import '../../assets/Flutterwave-New-Logo-2022-Transparent 1.png'
import '../../assets/Moniepoint Logo 1.png'
import '../../assets/Kuda Bank Logo 1.png'
import '../../assets/paypal-logo-png-2114 1.png'
import '../../assets/Standard Chartered Logo 1.png'
import './sponsors.css'


export const Sponsors = () => (
  <section className="sponsors-container">
    <div>
      <h2 className="sponsors-heading">We are trusted by <span className="sponsors-heading-emphasis">The Best Companies</span></h2>
    </div>
    <div className="sponsors-image-container">
      <img className="sponsors-image" src={require("../../assets/Flutterwave-New-Logo-2022-Transparent 1.png")} alt="Flutterwave Logo"/>
      <img className="sponsors-image" src={require("../../assets/Moniepoint Logo 1.png")} alt="Monipoint Logo"/>
      <img className="sponsors-image" src={require("../../assets/Kuda Bank Logo 1.png")} alt="Kuda Logo"/>
      <img className="sponsors-image" src={require("../../assets/paypal-logo-png-2114 1.png")} alt="Paypal Logo"/>
      <img className="sponsors-image" src={require("../../assets/Standard Chartered Logo 1.png")} alt="Standard Chartered Logo"/>

    </div>
  </section>
)