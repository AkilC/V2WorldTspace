/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCreator = /* GraphQL */ `
  query GetCreator($id: ID!) {
    getCreator(id: $id) {
      id
      World {
        id
        name
        Spaces {
          items {
            id
            title
            wID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Creator {
          id
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Store {
            id
            name
            createdAt
            updatedAt
            storeCreatorId
            __typename
          }
          name
          createdAt
          updatedAt
          creatorWorldId
          creatorStoreId
          __typename
        }
        createdAt
        updatedAt
        worldCreatorId
        __typename
      }
      Store {
        id
        Creator {
          id
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Store {
            id
            name
            createdAt
            updatedAt
            storeCreatorId
            __typename
          }
          name
          createdAt
          updatedAt
          creatorWorldId
          creatorStoreId
          __typename
        }
        Products {
          items {
            id
            storeID
            itemName
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdAt
        updatedAt
        storeCreatorId
        __typename
      }
      name
      createdAt
      updatedAt
      creatorWorldId
      creatorStoreId
      __typename
    }
  }
`;
export const listCreators = /* GraphQL */ `
  query ListCreators(
    $filter: ModelCreatorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        World {
          id
          name
          Spaces {
            nextToken
            __typename
          }
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          createdAt
          updatedAt
          worldCreatorId
          __typename
        }
        Store {
          id
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          Products {
            nextToken
            __typename
          }
          name
          createdAt
          updatedAt
          storeCreatorId
          __typename
        }
        name
        createdAt
        updatedAt
        creatorWorldId
        creatorStoreId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
      id
      Creator {
        id
        World {
          id
          name
          Spaces {
            nextToken
            __typename
          }
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          createdAt
          updatedAt
          worldCreatorId
          __typename
        }
        Store {
          id
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          Products {
            nextToken
            __typename
          }
          name
          createdAt
          updatedAt
          storeCreatorId
          __typename
        }
        name
        createdAt
        updatedAt
        creatorWorldId
        creatorStoreId
        __typename
      }
      Products {
        items {
          id
          storeID
          Store {
            id
            name
            createdAt
            updatedAt
            storeCreatorId
            __typename
          }
          itemName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      name
      createdAt
      updatedAt
      storeCreatorId
      __typename
    }
  }
`;
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Creator {
          id
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Store {
            id
            name
            createdAt
            updatedAt
            storeCreatorId
            __typename
          }
          name
          createdAt
          updatedAt
          creatorWorldId
          creatorStoreId
          __typename
        }
        Products {
          items {
            id
            storeID
            itemName
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdAt
        updatedAt
        storeCreatorId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      storeID
      Store {
        id
        Creator {
          id
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Store {
            id
            name
            createdAt
            updatedAt
            storeCreatorId
            __typename
          }
          name
          createdAt
          updatedAt
          creatorWorldId
          creatorStoreId
          __typename
        }
        Products {
          items {
            id
            storeID
            itemName
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdAt
        updatedAt
        storeCreatorId
        __typename
      }
      itemName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storeID
        Store {
          id
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          Products {
            nextToken
            __typename
          }
          name
          createdAt
          updatedAt
          storeCreatorId
          __typename
        }
        itemName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const productsByStoreID = /* GraphQL */ `
  query ProductsByStoreID(
    $storeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByStoreID(
      storeID: $storeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storeID
        Store {
          id
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          Products {
            nextToken
            __typename
          }
          name
          createdAt
          updatedAt
          storeCreatorId
          __typename
        }
        itemName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWorld = /* GraphQL */ `
  query GetWorld($id: ID!) {
    getWorld(id: $id) {
      id
      name
      Spaces {
        items {
          id
          title
          wID
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Events {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Creator {
        id
        World {
          id
          name
          Spaces {
            nextToken
            __typename
          }
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          createdAt
          updatedAt
          worldCreatorId
          __typename
        }
        Store {
          id
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          Products {
            nextToken
            __typename
          }
          name
          createdAt
          updatedAt
          storeCreatorId
          __typename
        }
        name
        createdAt
        updatedAt
        creatorWorldId
        creatorStoreId
        __typename
      }
      createdAt
      updatedAt
      worldCreatorId
      __typename
    }
  }
`;
export const listWorlds = /* GraphQL */ `
  query ListWorlds(
    $filter: ModelWorldFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorlds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Spaces {
          items {
            id
            title
            wID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Creator {
          id
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Store {
            id
            name
            createdAt
            updatedAt
            storeCreatorId
            __typename
          }
          name
          createdAt
          updatedAt
          creatorWorldId
          creatorStoreId
          __typename
        }
        createdAt
        updatedAt
        worldCreatorId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSpace = /* GraphQL */ `
  query GetSpace($id: ID!) {
    getSpace(id: $id) {
      id
      title
      wID
      World {
        id
        name
        Spaces {
          items {
            id
            title
            wID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Creator {
          id
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Store {
            id
            name
            createdAt
            updatedAt
            storeCreatorId
            __typename
          }
          name
          createdAt
          updatedAt
          creatorWorldId
          creatorStoreId
          __typename
        }
        createdAt
        updatedAt
        worldCreatorId
        __typename
      }
      Events {
        items {
          id
          name
          type
          spaceID
          Comments {
            nextToken
            __typename
          }
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Space {
            id
            title
            wID
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          eventWorldId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSpaces = /* GraphQL */ `
  query ListSpaces(
    $filter: ModelSpaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        wID
        World {
          id
          name
          Spaces {
            nextToken
            __typename
          }
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          createdAt
          updatedAt
          worldCreatorId
          __typename
        }
        Events {
          items {
            id
            name
            type
            spaceID
            createdAt
            updatedAt
            eventWorldId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const spacesByWID = /* GraphQL */ `
  query SpacesByWID(
    $wID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSpaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    spacesByWID(
      wID: $wID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        wID
        World {
          id
          name
          Spaces {
            nextToken
            __typename
          }
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          createdAt
          updatedAt
          worldCreatorId
          __typename
        }
        Events {
          items {
            id
            name
            type
            spaceID
            createdAt
            updatedAt
            eventWorldId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      type
      spaceID
      Comments {
        items {
          id
          content
          eventID
          Event {
            id
            name
            type
            spaceID
            createdAt
            updatedAt
            eventWorldId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      World {
        id
        name
        Spaces {
          items {
            id
            title
            wID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Creator {
          id
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Store {
            id
            name
            createdAt
            updatedAt
            storeCreatorId
            __typename
          }
          name
          createdAt
          updatedAt
          creatorWorldId
          creatorStoreId
          __typename
        }
        createdAt
        updatedAt
        worldCreatorId
        __typename
      }
      Space {
        id
        title
        wID
        World {
          id
          name
          Spaces {
            nextToken
            __typename
          }
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          createdAt
          updatedAt
          worldCreatorId
          __typename
        }
        Events {
          items {
            id
            name
            type
            spaceID
            createdAt
            updatedAt
            eventWorldId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      eventWorldId
      __typename
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        spaceID
        Comments {
          items {
            id
            content
            eventID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        World {
          id
          name
          Spaces {
            nextToken
            __typename
          }
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          createdAt
          updatedAt
          worldCreatorId
          __typename
        }
        Space {
          id
          title
          wID
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Events {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        eventWorldId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const eventsBySpaceID = /* GraphQL */ `
  query EventsBySpaceID(
    $spaceID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsBySpaceID(
      spaceID: $spaceID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        type
        spaceID
        Comments {
          items {
            id
            content
            eventID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        World {
          id
          name
          Spaces {
            nextToken
            __typename
          }
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          createdAt
          updatedAt
          worldCreatorId
          __typename
        }
        Space {
          id
          title
          wID
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Events {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        eventWorldId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      eventID
      Event {
        id
        name
        type
        spaceID
        Comments {
          items {
            id
            content
            eventID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        World {
          id
          name
          Spaces {
            nextToken
            __typename
          }
          Creator {
            id
            name
            createdAt
            updatedAt
            creatorWorldId
            creatorStoreId
            __typename
          }
          createdAt
          updatedAt
          worldCreatorId
          __typename
        }
        Space {
          id
          title
          wID
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Events {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        eventWorldId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        eventID
        Event {
          id
          name
          type
          spaceID
          Comments {
            nextToken
            __typename
          }
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Space {
            id
            title
            wID
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          eventWorldId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByEventID = /* GraphQL */ `
  query CommentsByEventID(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByEventID(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        eventID
        Event {
          id
          name
          type
          spaceID
          Comments {
            nextToken
            __typename
          }
          World {
            id
            name
            createdAt
            updatedAt
            worldCreatorId
            __typename
          }
          Space {
            id
            title
            wID
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          eventWorldId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
