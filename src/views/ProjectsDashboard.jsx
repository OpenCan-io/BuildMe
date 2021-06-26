import React, { useEffect, useState } from "react"

import AuthenticatedDashboard from "../components/AuthenticatedDashboard";
import UnauthenticatedDashboard from "../components/UnauthenticatedDashboard.jsx";

// frequency, in seconds, of checking for project updates
const delay = 30;

function ProjectsDashboard() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authClient, setAuthClient] = useState(undefined);

  useEffect(() => {
    let authClientTimer = setTimeout(() => {checkIsLoggedIn();}, 100);
    return () => {
      clearTimeout(authClientTimer);
    };
  }, [authClient]);

  function checkIsLoggedIn() {
    window.authClient?.isAuthenticated().then(value => {
      setIsLoggedIn(value);
    })
  }

  const [projects, setProjects] = useState({});
  const [count, setCount] = useState(0);

  // check for project updates
  useEffect(() => {
    if (count==0) {
      getNewProjects();
    }
    let projectUpdateTimer = setTimeout(() => {getNewProjects(); setCount(prevCount => prevCount+1);}, delay * 1000);
    return () => {
      clearTimeout(projectUpdateTimer);
    };
  }, [count]);

  async function getNewProjects() {
    checkIsLoggedIn();
    let projectResults;

    // TODO add only new projects to UI
    // projectResults = await (await buildme()).getUnauthenticatedProjects();
    // projectResults = await (await buildme()).getAuthenticatedProjects(identity);
    projectResults = [
      {id: 1, name: "foo", likes: 23, dislikes: 1, userVote: {userDidVote: true, userDidLike: true}}, 
      {id: 2, name: "bar", likes: 13, dislikes: 5, userVote: {userDidVote: false}}
    ];
    setProjects(projectResults);
  }

  function login() {
    const daysToAdd = 7;
    const expiry =  Date.now() + (daysToAdd * 86400000); 

    window.authClient?.login({
      identityProvider: "http://localhost:8000/?canisterId=rwlgt-iiaaa-aaaaa-aaaaa-cai",
      maxTimeToLive: BigInt(expiry * 1000000), // 7 days
      onSuccess: async () => {
        setIsLoggedIn(true);
      }
    })
  }

  function logout() {
    window.authClient?.logout({returnTo: '/projects'});
    setIsLoggedIn(false);
  }

  if (isLoggedIn) {
    return <AuthenticatedDashboard 
      handleAuth={logout}
      authText={"Log out"}
      projects={projects}
      />;
  }
  return <UnauthenticatedDashboard 
    handleAuth={login} 
    authText={"Log in"}
    projects={projects}
    />;
}

export default ProjectsDashboard
