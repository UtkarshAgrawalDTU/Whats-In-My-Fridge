import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Footer.css"


class Footer extends Component{

    render()
    {
        return(
            <div id="Footer">
                <div class="container">
                    <div class="row mt-5 pt-5">
                    <div class="col-lg-12 mb-4 text-center my-4">
                        <span class="fa-stack fa-2x icon">
                        <a href="https://www.linkedin.com/in/utkarsh-agrawal-622b5b16b/" target="_blank">
                            <i class="fa fa-stack-2x icon-background"></i>
                            <i class="fab fa-linkedin-in fa-stack-1x"></i>
                        </a>
                        </span>

                        <span class="fa-stack fa-2x icon">
                        <a href="https://github.com/UtkarshAgrawalDTU/" target="_blank">
                            <i class="fa fa fa-stack-2x icon-background"></i>
                            <i class="fab fa-github fa-stack-1x"></i>
                        </a>
                        </span>

                        <span class="icon fa-stack fa-2x icon">
                        <a href="mailto:agrawal.utkarsh8@gmail.com" target="_blank">
                            <i class="fa fa-stack-2x icon-background"></i>
                            <i class="far fa-envelope fa-stack-1x"></i>
                        </a>
                        </span>
                        <br />
                    </div>
                    <div class="col-lg-12 text-center">
                        <p class="copyright-text">
                        Handcrafted by me @<a><b>Utkarsh Agrawal</b></a>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default Footer