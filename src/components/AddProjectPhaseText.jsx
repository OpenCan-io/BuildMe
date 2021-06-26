import React from "react"

function AddProjectPhaseText() {
  
  return (
    <div className="container my-5 py-5" >
      <div className="text-center">
        <h1 className="display-5 fw-bold">Let's buidl something together</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Community driven projects are advantageous for the health, growth and adoption of a network, and wow are the projects exciting! Yet many developers are unable to participate because they're individuals without a clear project idea, or are waiting for some particular answers to unblock them. Let's enable the community to drive projects together with BuildMe.</p>
        </div>
      </div>

      <div className="col-lg-6 mx-auto">
        <h6>Here's how this is going to work:</h6>
        <ol>
          <li>Add projects you like (please no duplicates!)</li>
          <li>You may vote up or down on each project (or don’t vote)</li>
          <li>The top 5 options with the most votes (upvotes - downvotes) will be available for final voting</li>
          <li>We’ll all help build the project with the most votes!</li>
        </ol>
      </div>

      <div className="col-lg-6 mx-auto">Voting for the top 5 projects begins Sunday August 1, 2021 @ 12am UTC</div>
      <div className="col-lg-6 mx-auto">Final voting on the top project begins Wednesday September 1, 2021 @ 12am UTC</div>
    </div>
  );
}

export default AddProjectPhaseText
