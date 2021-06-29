import { Actor, HttpAgent } from "@dfinity/agent"
import { idlFactory as buildme_idl, canisterId as buildme_id } from "dfx-generated/buildme"

const buildme = async () => {
  const agentOptions = {
    host: "http://localhost:8000",
    identity: await window.authClient.getIdentity()
  }
  const agent = new HttpAgent(agentOptions);
  const actor = Actor.createActor(buildme_idl, { agent, canisterId: buildme_id });
  return actor;
}

export { buildme }