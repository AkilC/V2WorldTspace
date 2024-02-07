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
import { listCreators, listSpaces } from "../graphql/queries";
import {
  createWorld,
  updateCreator,
  updateSpace,
  updateWorld,
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
export default function WorldCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    Spaces: [],
    Creator: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [Spaces, setSpaces] = React.useState(initialValues.Spaces);
  const [SpacesLoading, setSpacesLoading] = React.useState(false);
  const [spacesRecords, setSpacesRecords] = React.useState([]);
  const [Creator, setCreator] = React.useState(initialValues.Creator);
  const [CreatorLoading, setCreatorLoading] = React.useState(false);
  const [creatorRecords, setCreatorRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setSpaces(initialValues.Spaces);
    setCurrentSpacesValue(undefined);
    setCurrentSpacesDisplayValue("");
    setCreator(initialValues.Creator);
    setCurrentCreatorValue(undefined);
    setCurrentCreatorDisplayValue("");
    setErrors({});
  };
  const [currentSpacesDisplayValue, setCurrentSpacesDisplayValue] =
    React.useState("");
  const [currentSpacesValue, setCurrentSpacesValue] = React.useState(undefined);
  const SpacesRef = React.createRef();
  const [currentCreatorDisplayValue, setCurrentCreatorDisplayValue] =
    React.useState("");
  const [currentCreatorValue, setCurrentCreatorValue] =
    React.useState(undefined);
  const CreatorRef = React.createRef();
  const getIDValue = {
    Spaces: (r) => JSON.stringify({ id: r?.id }),
    Creator: (r) => JSON.stringify({ id: r?.id }),
  };
  const SpacesIdSet = new Set(
    Array.isArray(Spaces)
      ? Spaces.map((r) => getIDValue.Spaces?.(r))
      : getIDValue.Spaces?.(Spaces)
  );
  const CreatorIdSet = new Set(
    Array.isArray(Creator)
      ? Creator.map((r) => getIDValue.Creator?.(r))
      : getIDValue.Creator?.(Creator)
  );
  const getDisplayValue = {
    Spaces: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
    Creator: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    Spaces: [],
    Creator: [],
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
  const fetchSpacesRecords = async (value) => {
    setSpacesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ title: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listSpaces.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listSpaces?.items;
      var loaded = result.filter(
        (item) => !SpacesIdSet.has(getIDValue.Spaces?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setSpacesRecords(newOptions.slice(0, autocompleteLength));
    setSpacesLoading(false);
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
  React.useEffect(() => {
    fetchSpacesRecords("");
    fetchCreatorRecords("");
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
          name,
          Spaces,
          Creator,
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
            name: modelFields.name,
            worldCreatorId: modelFields?.Creator?.id,
          };
          const world = (
            await client.graphql({
              query: createWorld.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createWorld;
          const promises = [];
          promises.push(
            ...Spaces.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateSpace.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          const creatorToLink = modelFields.Creator;
          if (creatorToLink) {
            promises.push(
              client.graphql({
                query: updateCreator.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: Creator.id,
                    creatorWorldId: world.id,
                  },
                },
              })
            );
            const worldToUnlink = await creatorToLink.World;
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
          }
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "WorldCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              Spaces,
              Creator,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              Spaces: values,
              Creator,
            };
            const result = onChange(modelFields);
            values = result?.Spaces ?? values;
          }
          setSpaces(values);
          setCurrentSpacesValue(undefined);
          setCurrentSpacesDisplayValue("");
        }}
        currentFieldValue={currentSpacesValue}
        label={"Spaces"}
        items={Spaces}
        hasError={errors?.Spaces?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Spaces", currentSpacesValue)
        }
        errorMessage={errors?.Spaces?.errorMessage}
        getBadgeText={getDisplayValue.Spaces}
        setFieldValue={(model) => {
          setCurrentSpacesDisplayValue(
            model ? getDisplayValue.Spaces(model) : ""
          );
          setCurrentSpacesValue(model);
        }}
        inputFieldRef={SpacesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Spaces"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Space"
          value={currentSpacesDisplayValue}
          options={spacesRecords.map((r) => ({
            id: getIDValue.Spaces?.(r),
            label: getDisplayValue.Spaces?.(r),
          }))}
          isLoading={SpacesLoading}
          onSelect={({ id, label }) => {
            setCurrentSpacesValue(
              spacesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSpacesDisplayValue(label);
            runValidationTasks("Spaces", label);
          }}
          onClear={() => {
            setCurrentSpacesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchSpacesRecords(value);
            if (errors.Spaces?.hasError) {
              runValidationTasks("Spaces", value);
            }
            setCurrentSpacesDisplayValue(value);
            setCurrentSpacesValue(undefined);
          }}
          onBlur={() => runValidationTasks("Spaces", currentSpacesDisplayValue)}
          errorMessage={errors.Spaces?.errorMessage}
          hasError={errors.Spaces?.hasError}
          ref={SpacesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Spaces")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              Spaces,
              Creator: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
