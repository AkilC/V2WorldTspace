/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getStore, listCreators, listProducts } from "../graphql/queries";
import {
  updateCreator,
  updateProduct,
  updateStore,
} from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function StoreUpdateForm(props) {
  const {
    id: idProp,
    store: storeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Creator: undefined,
    Products: [],
    name: "",
  };
  const [Creator, setCreator] = React.useState(initialValues.Creator);
  const [CreatorLoading, setCreatorLoading] = React.useState(false);
  const [creatorRecords, setCreatorRecords] = React.useState([]);
  const [Products, setProducts] = React.useState(initialValues.Products);
  const [ProductsLoading, setProductsLoading] = React.useState(false);
  const [productsRecords, setProductsRecords] = React.useState([]);
  const [name, setName] = React.useState(initialValues.name);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = storeRecord
      ? { ...initialValues, ...storeRecord, Creator, Products: linkedProducts }
      : initialValues;
    setCreator(cleanValues.Creator);
    setCurrentCreatorValue(undefined);
    setCurrentCreatorDisplayValue("");
    setProducts(cleanValues.Products ?? []);
    setCurrentProductsValue(undefined);
    setCurrentProductsDisplayValue("");
    setName(cleanValues.name);
    setErrors({});
  };
  const [storeRecord, setStoreRecord] = React.useState(storeModelProp);
  const [linkedProducts, setLinkedProducts] = React.useState([]);
  const canUnlinkProducts = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getStore.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getStore
        : storeModelProp;
      const CreatorRecord = record ? await record.Creator : undefined;
      setCreator(CreatorRecord);
      const linkedProducts = record?.Products?.items ?? [];
      setLinkedProducts(linkedProducts);
      setStoreRecord(record);
    };
    queryData();
  }, [idProp, storeModelProp]);
  React.useEffect(resetStateValues, [storeRecord, Creator, linkedProducts]);
  const [currentCreatorDisplayValue, setCurrentCreatorDisplayValue] =
    React.useState("");
  const [currentCreatorValue, setCurrentCreatorValue] =
    React.useState(undefined);
  const CreatorRef = React.createRef();
  const [currentProductsDisplayValue, setCurrentProductsDisplayValue] =
    React.useState("");
  const [currentProductsValue, setCurrentProductsValue] =
    React.useState(undefined);
  const ProductsRef = React.createRef();
  const getIDValue = {
    Creator: (r) => JSON.stringify({ id: r?.id }),
    Products: (r) => JSON.stringify({ id: r?.id }),
  };
  const CreatorIdSet = new Set(
    Array.isArray(Creator)
      ? Creator.map((r) => getIDValue.Creator?.(r))
      : getIDValue.Creator?.(Creator)
  );
  const ProductsIdSet = new Set(
    Array.isArray(Products)
      ? Products.map((r) => getIDValue.Products?.(r))
      : getIDValue.Products?.(Products)
  );
  const getDisplayValue = {
    Creator: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Products: (r) => `${r?.itemName ? r?.itemName + " - " : ""}${r?.id}`,
  };
  const validations = {
    Creator: [],
    Products: [],
    name: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchCreatorRecords = async (value) => {
    setCreatorLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listCreators.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCreators?.items;
      var loaded = result.filter(
        (item) => !CreatorIdSet.has(getIDValue.Creator?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCreatorRecords(newOptions.slice(0, autocompleteLength));
    setCreatorLoading(false);
  };
  const fetchProductsRecords = async (value) => {
    setProductsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ itemName: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listProducts.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listProducts?.items;
      var loaded = result.filter(
        (item) => !ProductsIdSet.has(getIDValue.Products?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setProductsRecords(newOptions.slice(0, autocompleteLength));
    setProductsLoading(false);
  };
  React.useEffect(() => {
    fetchCreatorRecords("");
    fetchProductsRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Creator: Creator ?? null,
          Products: Products ?? null,
          name: name ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const promises = [];
          const creatorToUnlink = await storeRecord.Creator;
          if (creatorToUnlink) {
            promises.push(
              client.graphql({
                query: updateCreator.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: creatorToUnlink.id,
                    creatorStoreId: null,
                  },
                },
              })
            );
          }
          const creatorToLink = modelFields.Creator;
          if (creatorToLink) {
            promises.push(
              client.graphql({
                query: updateCreator.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: Creator.id,
                    creatorStoreId: storeRecord.id,
                  },
                },
              })
            );
            const storeToUnlink = await creatorToLink.Store;
            if (storeToUnlink) {
              promises.push(
                client.graphql({
                  query: updateStore.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: storeToUnlink.id,
                      storeCreatorId: null,
                    },
                  },
                })
              );
            }
          }
          const productsToLink = [];
          const productsToUnLink = [];
          const productsSet = new Set();
          const linkedProductsSet = new Set();
          Products.forEach((r) => productsSet.add(getIDValue.Products?.(r)));
          linkedProducts.forEach((r) =>
            linkedProductsSet.add(getIDValue.Products?.(r))
          );
          linkedProducts.forEach((r) => {
            if (!productsSet.has(getIDValue.Products?.(r))) {
              productsToUnLink.push(r);
            }
          });
          Products.forEach((r) => {
            if (!linkedProductsSet.has(getIDValue.Products?.(r))) {
              productsToLink.push(r);
            }
          });
          productsToUnLink.forEach((original) => {
            if (!canUnlinkProducts) {
              throw Error(
                `Product ${original.id} cannot be unlinked from Store because undefined is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateProduct.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                  },
                },
              })
            );
          });
          productsToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateProduct.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            storeCreatorId: modelFields?.Creator?.id ?? null,
            name: modelFields.name ?? null,
          };
          promises.push(
            client.graphql({
              query: updateStore.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: storeRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "StoreUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              Creator: value,
              Products,
              name,
            };
            const result = onChange(modelFields);
            value = result?.Creator ?? value;
          }
          setCreator(value);
          setCurrentCreatorValue(undefined);
          setCurrentCreatorDisplayValue("");
        }}
        currentFieldValue={currentCreatorValue}
        label={"Creator"}
        items={Creator ? [Creator] : []}
        hasError={errors?.Creator?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Creator", currentCreatorValue)
        }
        errorMessage={errors?.Creator?.errorMessage}
        getBadgeText={getDisplayValue.Creator}
        setFieldValue={(model) => {
          setCurrentCreatorDisplayValue(
            model ? getDisplayValue.Creator(model) : ""
          );
          setCurrentCreatorValue(model);
        }}
        inputFieldRef={CreatorRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Creator"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Creator"
          value={currentCreatorDisplayValue}
          options={creatorRecords
            .filter((r) => !CreatorIdSet.has(getIDValue.Creator?.(r)))
            .map((r) => ({
              id: getIDValue.Creator?.(r),
              label: getDisplayValue.Creator?.(r),
            }))}
          isLoading={CreatorLoading}
          onSelect={({ id, label }) => {
            setCurrentCreatorValue(
              creatorRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCreatorDisplayValue(label);
            runValidationTasks("Creator", label);
          }}
          onClear={() => {
            setCurrentCreatorDisplayValue("");
          }}
          defaultValue={Creator}
          onChange={(e) => {
            let { value } = e.target;
            fetchCreatorRecords(value);
            if (errors.Creator?.hasError) {
              runValidationTasks("Creator", value);
            }
            setCurrentCreatorDisplayValue(value);
            setCurrentCreatorValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Creator", currentCreatorDisplayValue)
          }
          errorMessage={errors.Creator?.errorMessage}
          hasError={errors.Creator?.hasError}
          ref={CreatorRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Creator")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Creator,
              Products: values,
              name,
            };
            const result = onChange(modelFields);
            values = result?.Products ?? values;
          }
          setProducts(values);
          setCurrentProductsValue(undefined);
          setCurrentProductsDisplayValue("");
        }}
        currentFieldValue={currentProductsValue}
        label={"Products"}
        items={Products}
        hasError={errors?.Products?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Products", currentProductsValue)
        }
        errorMessage={errors?.Products?.errorMessage}
        getBadgeText={getDisplayValue.Products}
        setFieldValue={(model) => {
          setCurrentProductsDisplayValue(
            model ? getDisplayValue.Products(model) : ""
          );
          setCurrentProductsValue(model);
        }}
        inputFieldRef={ProductsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Products"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Product"
          value={currentProductsDisplayValue}
          options={productsRecords.map((r) => ({
            id: getIDValue.Products?.(r),
            label: getDisplayValue.Products?.(r),
          }))}
          isLoading={ProductsLoading}
          onSelect={({ id, label }) => {
            setCurrentProductsValue(
              productsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentProductsDisplayValue(label);
            runValidationTasks("Products", label);
          }}
          onClear={() => {
            setCurrentProductsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchProductsRecords(value);
            if (errors.Products?.hasError) {
              runValidationTasks("Products", value);
            }
            setCurrentProductsDisplayValue(value);
            setCurrentProductsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Products", currentProductsDisplayValue)
          }
          errorMessage={errors.Products?.errorMessage}
          hasError={errors.Products?.hasError}
          ref={ProductsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Products")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Creator,
              Products,
              name: value,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || storeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || storeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
