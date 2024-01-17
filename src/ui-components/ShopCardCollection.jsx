/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Product } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import ShopCardTall from "./ShopCardTall";
import { Collection } from "@aws-amplify/ui-react";
export default function ShopCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Product,
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
      {...getOverrideProps(overrides, "ShopCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <ShopCardTall
          width="auto"
          margin="0 0px 0 0"
          product={item}
          creator={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ShopCardTall>
      )}
    </Collection>
  );
}
