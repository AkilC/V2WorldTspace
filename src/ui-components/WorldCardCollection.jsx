/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { World } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import WorldCard from "./WorldCard";
import { Collection } from "@aws-amplify/ui-react";
export default function WorldCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: World,
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
          Spaces: await item.Spaces.toArray(),
          Creator: await item.Creator,
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
      {...getOverrideProps(overrides, "WorldCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <WorldCard
          world={item}
          width="auto"
          margin="0 8px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></WorldCard>
      )}
    </Collection>
  );
}
