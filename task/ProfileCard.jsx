import React, { useState } from "react";

function ProfileCard({ name, role, bio, image }) {
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    setConnected(!connected);
  };

  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />

      <h2>{name}</h2>
      <h3>{role}</h3>

      <p>{bio}</p>

      <button onClick={handleConnect}>
        {connected ? "Connected" : "Connect"}
      </button>
    </div>
  );
}

export default ProfileCard;