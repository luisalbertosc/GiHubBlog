import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { ProfileContainer, ProfileInfo } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;

interface ProfileData {
    login: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company?: string;
    followers: number;
  }

export function Profile() {
    const [profileData, setProfileData] = useState<ProfileData>(
        {} as ProfileData
      );

      const getProfileData = useCallback(async () => {
        try {
          const response = await api.get(`/users/${username}`);
    
          setProfileData(response.data);
        } finally {
        }
      }, [profileData]);
    
      useEffect(() => {
        getProfileData();
      }, []);

    return (
        <ProfileContainer>
            <img src={profileData.avatar_url} alt="" />
           <ProfileInfo>
                <header>
                    <h1>{profileData.name}</h1>
                    <a href={profileData.html_url} target="_blank">
                        GITHUB
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                </header>
             
                <span>{profileData.bio}</span>

                <ul>                 
                    <li>
                        <FontAwesomeIcon icon={faGithub}/>
                        {profileData.login}
                    </li>
                    {profileData?.company && (
                        <li>
                        <FontAwesomeIcon icon={faBuilding}/>
                        {profileData.company}
                    </li>
                    ) }
                  
                    <li>
                        <FontAwesomeIcon icon={faUserGroup}/>
                        {profileData.followers} seguidores
                    </li>
                </ul>  
        </ProfileInfo>
    </ProfileContainer>    
    )
}