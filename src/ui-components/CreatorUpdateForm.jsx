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
import { getCreator, listStores, listWorlds } from "../graphql/queries";
import { updateCreator, updateStore, updateWorld } from "../graphql/mutations";
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
export default function CreatorUpdateForm(props) {
  const {
    id: idProp,
    creator: creatorModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    World: undefined,
    Store: undefined,
    name: "",
  };
  const [World, setWorld] = React.useState(initialValues.World);
  const [WorldLoading, setWorldLoading] = React.useState(false);
  const [worldRecords, setWorldRecords] = React.useState([]);
  const [Store, setStore] = React.useState(initialValues.Store);
  const [StoreLoading, setStoreLoading] = React.useState(false);
  const [storeRecords, setStoreRecords] = React.useState([]);
  const [name, setName] = React.useState(initialValues.name);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = creatorRecord
      ? { ...initialValues, ...creatorRecord, World, Store }
      : initialValues;
    setWorld(cleanValues.World);
    setCurrentWorldValue(undefined);
    setCurrentWorldDisplayValue("");
    setStore(cleanValues.Store);
    setCurrentStoreValue(undefined);
    setCurrentStoreDisplayValue("");
    setName(cleanValues.name);
    setErrors({});
  };
  const [creatorRecord, setCreatorRecord] = React.useState(creatorModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCreator.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCreator
        : creatorModelProp;
      const WorldRecord = record ? await record.World : undefined;
      setWorld(WorldRecord);
      const StoreRecord = record ? await record.Store : undefined;
      setStore(StoreRecord);
      setCreatorRecord(record);
    };
    queryData();
  }, [idProp, creatorModelProp]);
  React.useEffect(resetStateValues, [creatorRecord, World, Store]);
  const [currentWorldDisplayValue, setCurrentWorldDisplayValue] =
    React.useState("");
  const [currentWorldValue, setCurrentWorldValue] = React.useState(undefined);
  const WorldRef = React.createRef();
  const [currentStoreDisplayValue, setCurrentStoreDisplayValue] =
    React.useState("");
  const [currentStoreValue, setCurrentStoreValue] = React.useState(undefined);
  const StoreRef = React.createRef();
  const getIDValue = {
    World: (r) => JSON.stringify({ id: r?.id }),
    Store: (r) => JSON.stringify({ id: r?.id }),
  };
  const WorldIdSet = new Set(
    Array.isArray(World)
      ? World.map((r) => getIDValue.World?.(r))
      : getIDValue.World?.(World)
  );
  const StoreIdSet = new Set(
    Array.isArray(Store)
      ? Store.map((r) => getIDValue.Store?.(r))
      : getIDValue.Store?.(Store)
  );
  const getDisplayValue = {
    World: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Store: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    World: [],
    Store: [],
    name: [{ type: "Required" }],
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
  const fetchWorldRecords = async (value) => {
    setWorldLoading(true);
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
          query: listWorlds.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listWorlds?.items;
      var loaded = result.filter(
        (item) => !WorldIdSet.has(getIDValue.World?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setWorldRecords(newOptions.slice(0, autocompleteLength));
    setWorldLoading(false);
  };
  const fetchStoreRecords = async (value) => {
    setStoreLoading(true);
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
          query: listStores.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listStores?.items;
      var loaded = result.filter(
        (item) => !StoreIdSet.has(getIDValue.Store?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setStoreRecords(newOptions.slice(0, autocompleteLength));
    setStoreLoading(false);
  };
  React.useEffect(() => {
    fetchWorldRecords("");
    fetchStoreRecords("");
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
          World: World ?? null,
          Store: Store ?? null,
          name,
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
          const worldToUnlink = await creatorRecord.World;
          if (worldToUnlink) {
            promises.push(
              client.graphql({
                query: updateWorld.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: worldToUnlink.id,
                    worldCreatorId: null,
                  },
                },
              })
            );
          }
          const worldToLink = modelFields.World;
          if (worldToLink) {
            promises.push(
              client.graphql({
                query: updateWorld.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: World.id,
                    worldCreatorId: creatorRecord.id,
                  },
                },
              })
            );
            const creatorToUnlink = await worldToLink.Creator;
            if (creatorToUnlink) {
              promises.push(
                client.graphql({
                  query: updateCreator.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: creatorToUnlink.id,
                      creatorWorldId: null,
                    },
                  },
                })
              );
            }
          }
          const storeToUnlink = await creatorRecord.Store;
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
          const storeToLink = modelFields.Store;
          if (storeToLink) {
            promises.push(
              client.graphql({
                query: updateStore.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: Store.id,
                    storeCreatorId: creatorRecord.id,
                  },
                },
              })
            );
            const creatorToUnlink = await storeToLink.Creator;
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
          }
          const modelFieldsToSave = {
            creatorWorldId: modelFields?.World?.id ?? null,
            creatorStoreId: modelFields?.Store?.id ?? null,
            name: modelFields.name,
          };
          promises.push(
            client.graphql({
              query: updateCreator.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: creatorRecord.id,
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
      {...getOverrideProps(overrides, "CreatorUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              World: value,
              Store,
              name,
            };
            const result = onChange(modelFields);
            value = result?.World ?? value;
          }
          setWorld(value);
          setCurrentWorldValue(undefined);
          setCurrentWorldDisplayValue("");
        }}
        currentFieldValue={currentWorldValue}
        label={"World"}
        items={World ? [World] : []}
        hasError={errors?.World?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("World", currentWorldValue)
        }
        errorMessage={errors?.World?.errorMessage}
        getBadgeText={getDisplayValue.World}
        setFieldValue={(model) => {
          setCurrentWorldDisplayValue(
            model ? getDisplayValue.World(model) : ""
          );
          setCurrentWorldValue(model);
        }}
        inputFieldRef={WorldRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="World"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search World"
          value={currentWorldDisplayValue}
          options={worldRecords
            .filter((r) => !WorldIdSet.has(getIDValue.World?.(r)))
            .map((r) => ({
              id: getIDValue.World?.(r),
              label: getDisplayValue.World?.(r),
            }))}
          isLoading={WorldLoading}
          onSelect={({ id, label }) => {
            setCurrentWorldValue(
              worldRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentWorldDisplayValue(label);
            runValidationTasks("World", label);
          }}
          onClear={() => {
            setCurrentWorldDisplayValue("");
          }}
          defaultValue={World}
          onChange={(e) => {
            let { value } = e.target;
            fetchWorldRecords(value);
            if (errors.World?.hasError) {
              runValidationTasks("World", value);
            }
            setCurrentWorldDisplayValue(value);
            setCurrentWorldValue(undefined);
          }}
          onBlur={() => runValidationTasks("World", currentWorldDisplayValue)}
          errorMessage={errors.World?.errorMessage}
          hasError={errors.World?.hasError}
          ref={WorldRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "World")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              World,
              Store: value,
              name,
            };
            const result = onChange(modelFields);
            value = result?.Store ?? value;
          }
          setStore(value);
          setCurrentStoreValue(undefined);
          setCurrentStoreDisplayValue("");
        }}
        currentFieldValue={currentStoreValue}
        label={"Store"}
        items={Store ? [Store] : []}
        hasError={errors?.Store?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Store", currentStoreValue)
        }
        errorMessage={errors?.Store?.errorMessage}
        getBadgeText={getDisplayValue.Store}
        setFieldValue={(model) => {
          setCurrentStoreDisplayValue(
            model ? getDisplayValue.Store(model) : ""
          );
          setCurrentStoreValue(model);
        }}
        inputFieldRef={StoreRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Store"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Store"
          value={currentStoreDisplayValue}
          options={storeRecords
            .filter((r) => !StoreIdSet.has(getIDValue.Store?.(r)))
            .map((r) => ({
              id: getIDValue.Store?.(r),
              label: getDisplayValue.Store?.(r),
            }))}
          isLoading={StoreLoading}
          onSelect={({ id, label }) => {
            setCurrentStoreValue(
              storeRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentStoreDisplayValue(label);
            runValidationTasks("Store", label);
          }}
          onClear={() => {
            setCurrentStoreDisplayValue("");
          }}
          defaultValue={Store}
          onChange={(e) => {
            let { value } = e.target;
            fetchStoreRecords(value);
            if (errors.Store?.hasError) {
              runValidationTasks("Store", value);
            }
            setCurrentStoreDisplayValue(value);
            setCurrentStoreValue(undefined);
          }}
          onBlur={() => runValidationTasks("Store", currentStoreDisplayValue)}
          errorMessage={errors.Store?.errorMessage}
          hasError={errors.Store?.hasError}
          ref={StoreRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Store")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              World,
              Store,
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
          isDisabled={!(idProp || creatorModelProp)}
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
              !(idProp || creatorModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
