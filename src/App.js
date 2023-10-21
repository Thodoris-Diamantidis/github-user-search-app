import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import profile from "./assets/Oval.png";
import { ReactComponent as Location } from "./assets/icon-location.svg";
import { ReactComponent as Twitter } from "./assets/icon-twitter.svg";
import { ReactComponent as Website } from "./assets/icon-website.svg";
import { ReactComponent as Company } from "./assets/icon-company.svg";
import { ReactComponent as Sun } from "./assets/icon-sun.svg";

export default function App() {
  const [githubData, setGithubData] = useState([]);
  const [githubUser, setGithubUser] = useState("Thodoris-diamantidis");

  const fetchData = () => {
    return fetch(`https://api.github.com/users/${githubUser}`)
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <article className="github">
        <div className="github__heading">
          <h1>devfinder</h1>
          <button className="btn__theme">
            Dark <Sun />
          </button>
        </div>
        <SearchBar setGithubUser={setGithubUser} fetchData={fetchData} />
        <div className="github__details">
          <div className="github__user">
            <div>
              <img
                className="github__profile"
                src={!githubData.avatar_url ? profile : githubData.avatar_url}
                alt="github profile picture"
              />
            </div>
            <div>
              <p className="github__username">
                {!githubData.login ? "User not found" : githubData.login}
              </p>
              <h3 className="github__add">
                <a href={githubData.html_url}>
                  @{!githubData.html_url ? "Unavailable" : githubData.html_url}
                </a>
              </h3>
              <h3>
                {!githubData.created_at
                  ? "Joined 27 Jul 2000"
                  : githubData.created_at}
              </h3>
            </div>
          </div>

          <div className="github__status">
            <h3 className="align-left">
              {!githubData.bio
                ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
                : githubData.bio}
            </h3>
          </div>

          <div className="github__stats">
            <p>
              <span>Repos</span>{" "}
              <span>
                {!githubData.public_repos ? "9" : githubData.public_repos}
              </span>
            </p>

            <p>
              <span>Followers</span>{" "}
              <span>{!githubData.followers ? "99" : githubData.followers}</span>
            </p>

            <p>
              <span>Following</span>{" "}
              <span>
                {!githubData.following ? "999" : githubData.following}
              </span>
            </p>
          </div>

          <div className="github__links">
            <div className="github__link">
              <Location fill="white" />
              {!githubData.location ? "Unavailable" : githubData.location}
            </div>

            <div className="github__link">
              <Twitter fill="white" />
              {!githubData.twitter_username
                ? "Unavailable"
                : githubData.twitter_username}
            </div>

            <div className="github__link">
              <Website fill="white" />
              {!githubData.blog ? (
                "Unavailable"
              ) : (
                <a href="">{githubData.blog}</a>
              )}
            </div>

            <div className="github__link">
              <Company fill="white" />
              {!githubData.company ? (
                "Unavailable"
              ) : (
                <a href="">@{githubData.company}</a>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
