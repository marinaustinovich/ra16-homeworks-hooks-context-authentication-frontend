import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import useStorage from "../../hooks/useStorage";

import "./Logout.css";

export type Profile = {
  name: string;
  avatar: string;
};

export const Logout = () => {
  const { token, handleLogout } = useContext(AuthContext);
  const [profile, setProfile] = useStorage<Profile | null>(localStorage, "profile", true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_PRIVSTE_ME_URL}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }
        const data = await response.json();

        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [setProfile, token]);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="form-wrapper">
      <p>Neto Social</p>
      <div className="user-wrapper">
        <p className="user-text">Hello, {profile.name}</p>
        <img className="user-avatar" src={profile.avatar} alt={profile.name} />
      </div>

      <button onClick={handleLogout} className="logout">
        Logout
      </button>
    </div>
  );
};
