import React from "react";
import SearchBar from "./components/SearchBar";
import profile from "./assets/Oval.png";
import { ReactComponent as Location } from "./assets/icon-location.svg";
import { ReactComponent as Twitter } from "./assets/icon-twitter.svg";
import { ReactComponent as Website } from "./assets/icon-website.svg";
import { ReactComponent as Company } from "./assets/icon-company.svg";
import { ReactComponent as Sun } from "./assets/icon-sun.svg";

export default function App() {
  return (
    <main>
      <article className="github">
        <div className="github__heading">
          <h1>devfinder</h1>
          <button className="btn__theme">
            Dark <Sun />
          </button>
        </div>
        <SearchBar />
        <div className="github__details">
          <div className="github__user">
            <div>
              <img className="github__profile" src={profile} />
            </div>
            <div>
              <p>The Octocat</p>
              <h3>@Octocat</h3>
              <h3>Joined 25,Jan 2011</h3>
            </div>
          </div>

          <div className="github__status">
            <h3 className="align-left">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </h3>
          </div>

          <div className="github__stats">
            <p>
              <span>Repos</span> <span>8</span>
            </p>

            <p>
              <span>Followers</span> <span>3938</span>
            </p>

            <p>
              <span>Following</span> <span>9</span>
            </p>
          </div>

          <div className="github__links">
            <div className="github__link">
              <Location fill="white" />
              San Francisco
            </div>

            <div className="github__link">
              <Twitter fill="white" />
              <a href="">Twitter</a>
            </div>

            <div className="github__link">
              <Website fill="white" />
              <a href="">https://github.blog</a>
            </div>

            <div className="github__link">
              <Company fill="white" />
              <a href="">@github</a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
