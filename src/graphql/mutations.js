/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCreator = /* GraphQL */ `
  mutation CreateCreator(
    $input: CreateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    createCreator(input: $input, condition: $condition) {
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
export const updateCreator = /* GraphQL */ `
  mutation UpdateCreator(
    $input: UpdateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    updateCreator(input: $input, condition: $condition) {
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
export const deleteCreator = /* GraphQL */ `
  mutation DeleteCreator(
    $input: DeleteCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    deleteCreator(input: $input, condition: $condition) {
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
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createWorld = /* GraphQL */ `
  mutation CreateWorld(
    $input: CreateWorldInput!
    $condition: ModelWorldConditionInput
  ) {
    createWorld(input: $input, condition: $condition) {
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
export const updateWorld = /* GraphQL */ `
  mutation UpdateWorld(
    $input: UpdateWorldInput!
    $condition: ModelWorldConditionInput
  ) {
    updateWorld(input: $input, condition: $condition) {
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
export const deleteWorld = /* GraphQL */ `
  mutation DeleteWorld(
    $input: DeleteWorldInput!
    $condition: ModelWorldConditionInput
  ) {
    deleteWorld(input: $input, condition: $condition) {
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
export const createSpace = /* GraphQL */ `
  mutation CreateSpace(
    $input: CreateSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    createSpace(input: $input, condition: $condition) {
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
export const updateSpace = /* GraphQL */ `
  mutation UpdateSpace(
    $input: UpdateSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    updateSpace(input: $input, condition: $condition) {
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
export const deleteSpace = /* GraphQL */ `
  mutation DeleteSpace(
    $input: DeleteSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    deleteSpace(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
