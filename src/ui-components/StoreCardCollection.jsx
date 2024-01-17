/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Creator } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import StoreCard from "./StoreCard";
import { Collection } from "@aws-amplify/ui-react";
export default function StoreCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Creator,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          World: await item.World,
          Store: await item.Store,
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "StoreCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <StoreCard
          store={item}
          creator={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></StoreCard>
      )}
    </Collection>
  );
}
