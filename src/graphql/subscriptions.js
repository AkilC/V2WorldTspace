/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCreator = /* GraphQL */ `
  subscription OnCreateCreator($filter: ModelSubscriptionCreatorFilterInput) {
    onCreateCreator(filter: $filter) {
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
export const onUpdateCreator = /* GraphQL */ `
  subscription OnUpdateCreator($filter: ModelSubscriptionCreatorFilterInput) {
    onUpdateCreator(filter: $filter) {
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
export const onDeleteCreator = /* GraphQL */ `
  subscription OnDeleteCreator($filter: ModelSubscriptionCreatorFilterInput) {
    onDeleteCreator(filter: $filter) {
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
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateWorld = /* GraphQL */ `
  subscription OnCreateWorld($filter: ModelSubscriptionWorldFilterInput) {
    onCreateWorld(filter: $filter) {
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
export const onUpdateWorld = /* GraphQL */ `
  subscription OnUpdateWorld($filter: ModelSubscriptionWorldFilterInput) {
    onUpdateWorld(filter: $filter) {
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
export const onDeleteWorld = /* GraphQL */ `
  subscription OnDeleteWorld($filter: ModelSubscriptionWorldFilterInput) {
    onDeleteWorld(filter: $filter) {
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
export const onCreateSpace = /* GraphQL */ `
  subscription OnCreateSpace($filter: ModelSubscriptionSpaceFilterInput) {
    onCreateSpace(filter: $filter) {
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
export const onUpdateSpace = /* GraphQL */ `
  subscription OnUpdateSpace($filter: ModelSubscriptionSpaceFilterInput) {
    onUpdateSpace(filter: $filter) {
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
export const onDeleteSpace = /* GraphQL */ `
  subscription OnDeleteSpace($filter: ModelSubscriptionSpaceFilterInput) {
    onDeleteSpace(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
