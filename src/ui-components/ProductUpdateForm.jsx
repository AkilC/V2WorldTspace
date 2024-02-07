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
import { getProduct, listStores } from "../graphql/queries";
import { updateProduct } from "../graphql/mutations";
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
export default function ProductUpdateForm(props) {
  const {
    id: idProp,
    product: productModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Store: undefined,
    itemName: "",
  };
  const [Store, setStore] = React.useState(initialValues.Store);
  const [StoreLoading, setStoreLoading] = React.useState(false);
  const [storeRecords, setStoreRecords] = React.useState([]);
  const [itemName, setItemName] = React.useState(initialValues.itemName);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productRecord
      ? { ...initialValues, ...productRecord, Store }
      : initialValues;
    setStore(cleanValues.Store);
    setCurrentStoreValue(undefined);
    setCurrentStoreDisplayValue("");
    setItemName(cleanValues.itemName);
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(productModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProduct.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProduct
        : productModelProp;
      const StoreRecord = record ? await record.Store : undefined;
      setStore(StoreRecord);
      setProductRecord(record);
    };
    queryData();
  }, [idProp, productModelProp]);
  React.useEffect(resetStateValues, [productRecord, Store]);
  const [currentStoreDisplayValue, setCurrentStoreDisplayValue] =
    React.useState("");
  const [currentStoreValue, setCurrentStoreValue] = React.useState(undefined);
  const StoreRef = React.createRef();
  const getIDValue = {
    Store: (r) => JSON.stringify({ id: r?.id }),
  };
  const StoreIdSet = new Set(
    Array.isArray(Store)
      ? Store.map((r) => getIDValue.Store?.(r))
      : getIDValue.Store?.(Store)
  );
  const getDisplayValue = {
    Store: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    Store: [],
    itemName: [{ type: "Required" }],
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
          Store: Store ?? null,
          itemName,
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
          const modelFieldsToSave = {
            storeID: modelFields?.Store?.id ?? null,
            itemName: modelFields.itemName,
          };
          await client.graphql({
            query: updateProduct.replaceAll("__typename", ""),
            variables: {
              input: {
                id: productRecord.id,
                ...modelFieldsToSave,
              },
            },
          });
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
      {...getOverrideProps(overrides, "ProductUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              Store: value,
              itemName,
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
        label="Item name"
        isRequired={true}
        isReadOnly={false}
        value={itemName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Store,
              itemName: value,
            };
            const result = onChange(modelFields);
            value = result?.itemName ?? value;
          }
          if (errors.itemName?.hasError) {
            runValidationTasks("itemName", value);
          }
          setItemName(value);
        }}
        onBlur={() => runValidationTasks("itemName", itemName)}
        errorMessage={errors.itemName?.errorMessage}
        hasError={errors.itemName?.hasError}
        {...getOverrideProps(overrides, "itemName")}
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
          isDisabled={!(idProp || productModelProp)}
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
              !(idProp || productModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
