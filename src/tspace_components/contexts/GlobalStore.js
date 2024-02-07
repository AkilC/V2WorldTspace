import React, { createContext, useState, useEffect, useCallback } from 'react';
import { listEvents, getEvent, listWorlds, getProfile, listProfiles } from '../../graphql/queries';
import { deleteProfile } from '../../graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser} from "aws-amplify/auth";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [eventsData, setEventsData] = useState([]);
  const [worldsData, setWorldsData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [loading, setLoading] = useState(true);
  const pageSize = 6;

  // Inside GlobalProvider
  const [eventDetails, setEventDetails] = useState(null);
  const [eventLoading, setEventLoading] = useState(false);

  const client = generateClient();
  const publicClient = generateClient({ authMode: 'apiKey' });

  /* async function deleteProfileById(profileId) {
    try {
      const deleteInput = {
        input: {
          id: profileId
        }
      };
      await client.graphql({
        query: deleteProfile,
        variables: deleteInput
      });
      console.log(`Profile with ID ${profileId} deleted`);
    } catch (error) {
      console.error(`Error deleting profile with ID ${profileId}:`, error);
    }
  }
  
  // Example usage
  async function deleteMultipleProfiles(profileIds) {
    for (const id of profileIds) {
      await deleteProfileById(id);
    }
  }
  
  // Call this function with an array of profile IDs you want to delete
  deleteMultipleProfiles(['0d3e556d-0004-4951-abb5-52c95867bd00', '58713e24-bba7-43b9-bfd5-c24c7562b9fa']); */

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      try {
        const result = await publicClient.graphql({
          query: listEvents.replaceAll("__typename", ""),
          variables: { limit: pageSize },
        });
        console.log(result);
        if (result.data && result.data.listEvents) {
          setEventsData(result.data.listEvents.items);
          setHasMorePages(!!result.data.listEvents.nextToken);
        } else {
          console.error("No data received from the query");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
      setLoading(false);
    };
  
    loadEvents();
  }, [pageIndex]);

  async function checkUserProfile() {
      try {
          const currentUser = await getCurrentUser();
          const userId = currentUser.username; // or currentUser.attributes.sub
          console.log("Current User ID:", userId);

          const response = await client.graphql({
              query: listProfiles,
          });

          console.log("List Profiles Response:", response);

          const profiles = response.data.listProfiles.items;
          const userProfile = profiles.find(profile => profile.owner === userId);

          console.log("Matching User Profile:", userProfile);

          return userProfile ? true : false;
      } catch (error) {
          console.error('Error checking user profiles:', error);
          return false;
      }
  }

  async function fetchUserProfile() {
      try {
          const currentUser = await getCurrentUser();
          const userId = currentUser.username; // or currentUser.attributes.sub

          const response = await client.graphql({
              query: listProfiles,
          });

          const profiles = response.data.listProfiles.items;
          const userProfile = profiles.find(profile => profile.owner === userId);

          return userProfile || null; // Return the userProfile object or null if not found
      } catch (error) {
          console.error('Error fetching user profile:', error);
          return null;
      }
  }

  useEffect(() => {
    const loadWorlds = async () => {
      setLoading(true);
      try {
        const result = await publicClient.graphql({
          query: listWorlds.replaceAll("__typename", ""),
          variables: { limit: pageSize },
        });
        console.log(result);
        if (result.data && result.data.listWorlds) {
          setWorldsData(result.data.listWorlds.items);
          setHasMorePages(!!result.data.listWorlds.nextToken);
        } else {
          console.error("No data received from the query");
        }
      } catch (error) {
        console.error("Error fetching Worlds:", error);
      }
      setLoading(false);
    };
  
    loadWorlds();
  }, [pageIndex]);

  return (
    <GlobalContext.Provider value={{
        eventsData, setEventsData, worldsData, setWorldsData, pageIndex, setPageIndex,
        hasMorePages, loading, eventDetails, setEventDetails, eventLoading, checkUserProfile, fetchUserProfile
      }}>
        {children}
    </GlobalContext.Provider>
  );
};