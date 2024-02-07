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
import {
  getEvent,
  listComments,
  listSpaces,
  listWorlds,
} from "../graphql/queries";
import { updateComment, updateEvent } from "../graphql/mutations";
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
export default function EventUpdateForm(props) {
  const {
    id: idProp,
    event: eventModelProp,
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
    type: "",
    Comments: [],
    World: undefined,
    Space: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [type, setType] = React.useState(initialValues.type);
  const [Comments, setComments] = React.useState(initialValues.Comments);
  const [CommentsLoading, setCommentsLoading] = React.useState(false);
  const [commentsRecords, setCommentsRecords] = React.useState([]);
  const [World, setWorld] = React.useState(initialValues.World);
  const [WorldLoading, setWorldLoading] = React.useState(false);
  const [worldRecords, setWorldRecords] = React.useState([]);
  const [Space, setSpace] = React.useState(initialValues.Space);
  const [SpaceLoading, setSpaceLoading] = React.useState(false);
  const [spaceRecords, setSpaceRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventRecord
      ? {
          ...initialValues,
          ...eventRecord,
          Comments: linkedComments,
          World,
          Space,
        }
      : initialValues;
    setName(cleanValues.name);
    setType(cleanValues.type);
    setComments(cleanValues.Comments ?? []);
    setCurrentCommentsValue(undefined);
    setCurrentCommentsDisplayValue("");
    setWorld(cleanValues.World);
    setCurrentWorldValue(undefined);
    setCurrentWorldDisplayValue("");
    setSpace(cleanValues.Space);
    setCurrentSpaceValue(undefined);
    setCurrentSpaceDisplayValue("");
    setErrors({});
  };
  const [eventRecord, setEventRecord] = React.useState(eventModelProp);
  const [linkedComments, setLinkedComments] = React.useState([]);
  const canUnlinkComments = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEvent.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEvent
        : eventModelProp;
      const linkedComments = record?.Comments?.items ?? [];
      setLinkedComments(linkedComments);
      const WorldRecord = record ? await record.World : undefined;
      setWorld(WorldRecord);
      const SpaceRecord = record ? await record.Space : undefined;
      setSpace(SpaceRecord);
      setEventRecord(record);
    };
    queryData();
  }, [idProp, eventModelProp]);
  React.useEffect(resetStateValues, [
    eventRecord,
    linkedComments,
    World,
    Space,
  ]);
  const [currentCommentsDisplayValue, setCurrentCommentsDisplayValue] =
    React.useState("");
  const [currentCommentsValue, setCurrentCommentsValue] =
    React.useState(undefined);
  const CommentsRef = React.createRef();
  const [currentWorldDisplayValue, setCurrentWorldDisplayValue] =
    React.useState("");
  const [currentWorldValue, setCurrentWorldValue] = React.useState(undefined);
  const WorldRef = React.createRef();
  const [currentSpaceDisplayValue, setCurrentSpaceDisplayValue] =
    React.useState("");
  const [currentSpaceValue, setCurrentSpaceValue] = React.useState(undefined);
  const SpaceRef = React.createRef();
  const getIDValue = {
    Comments: (r) => JSON.stringify({ id: r?.id }),
    World: (r) => JSON.stringify({ id: r?.id }),
    Space: (r) => JSON.stringify({ id: r?.id }),
  };
  const CommentsIdSet = new Set(
    Array.isArray(Comments)
      ? Comments.map((r) => getIDValue.Comments?.(r))
      : getIDValue.Comments?.(Comments)
  );
  const WorldIdSet = new Set(
    Array.isArray(World)
      ? World.map((r) => getIDValue.World?.(r))
      : getIDValue.World?.(World)
  );
  const SpaceIdSet = new Set(
    Array.isArray(Space)
      ? Space.map((r) => getIDValue.Space?.(r))
      : getIDValue.Space?.(Space)
  );
  const getDisplayValue = {
    Comments: (r) => `${r?.content ? r?.content + " - " : ""}${r?.id}`,
    World: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Space: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    type: [],
    Comments: [],
    World: [],
    Space: [],
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
  const fetchCommentsRecords = async (value) => {
    setCommentsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ content: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listComments.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listComments?.items;
      var loaded = result.filter(
        (item) => !CommentsIdSet.has(getIDValue.Comments?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCommentsRecords(newOptions.slice(0, autocompleteLength));
    setCommentsLoading(false);
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
  const fetchSpaceRecords = async (value) => {
    setSpaceLoading(true);
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
        (item) => !SpaceIdSet.has(getIDValue.Space?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setSpaceRecords(newOptions.slice(0, autocompleteLength));
    setSpaceLoading(false);
  };
  React.useEffect(() => {
    fetchCommentsRecords("");
    fetchWorldRecords("");
    fetchSpaceRecords("");
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
          name: name ?? null,
          type: type ?? null,
          Comments: Comments ?? null,
          World: World ?? null,
          Space: Space ?? null,
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
          const commentsToLink = [];
          const commentsToUnLink = [];
          const commentsSet = new Set();
          const linkedCommentsSet = new Set();
          Comments.forEach((r) => commentsSet.add(getIDValue.Comments?.(r)));
          linkedComments.forEach((r) =>
            linkedCommentsSet.add(getIDValue.Comments?.(r))
          );
          linkedComments.forEach((r) => {
            if (!commentsSet.has(getIDValue.Comments?.(r))) {
              commentsToUnLink.push(r);
            }
          });
          Comments.forEach((r) => {
            if (!linkedCommentsSet.has(getIDValue.Comments?.(r))) {
              commentsToLink.push(r);
            }
          });
          commentsToUnLink.forEach((original) => {
            if (!canUnlinkComments) {
              throw Error(
                `Comment ${original.id} cannot be unlinked from Event because undefined is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateComment.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                  },
                },
              })
            );
          });
          commentsToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateComment.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            name: modelFields.name ?? null,
            type: modelFields.type ?? null,
            eventWorldId: modelFields?.World?.id ?? null,
            spaceID: modelFields?.Space?.id ?? null,
          };
          promises.push(
            client.graphql({
              query: updateEvent.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: eventRecord.id,
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
      {...getOverrideProps(overrides, "EventUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              type,
              Comments,
              World,
              Space,
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
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type: value,
              Comments,
              World,
              Space,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              type,
              Comments: values,
              World,
              Space,
            };
            const result = onChange(modelFields);
            values = result?.Comments ?? values;
          }
          setComments(values);
          setCurrentCommentsValue(undefined);
          setCurrentCommentsDisplayValue("");
        }}
        currentFieldValue={currentCommentsValue}
        label={"Comments"}
        items={Comments}
        hasError={errors?.Comments?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Comments", currentCommentsValue)
        }
        errorMessage={errors?.Comments?.errorMessage}
        getBadgeText={getDisplayValue.Comments}
        setFieldValue={(model) => {
          setCurrentCommentsDisplayValue(
            model ? getDisplayValue.Comments(model) : ""
          );
          setCurrentCommentsValue(model);
        }}
        inputFieldRef={CommentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Comments"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Comment"
          value={currentCommentsDisplayValue}
          options={commentsRecords.map((r) => ({
            id: getIDValue.Comments?.(r),
            label: getDisplayValue.Comments?.(r),
          }))}
          isLoading={CommentsLoading}
          onSelect={({ id, label }) => {
            setCurrentCommentsValue(
              commentsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCommentsDisplayValue(label);
            runValidationTasks("Comments", label);
          }}
          onClear={() => {
            setCurrentCommentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCommentsRecords(value);
            if (errors.Comments?.hasError) {
              runValidationTasks("Comments", value);
            }
            setCurrentCommentsDisplayValue(value);
            setCurrentCommentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Comments", currentCommentsDisplayValue)
          }
          errorMessage={errors.Comments?.errorMessage}
          hasError={errors.Comments?.hasError}
          ref={CommentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Comments")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              type,
              Comments,
              World: value,
              Space,
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
              name,
              type,
              Comments,
              World,
              Space: value,
            };
            const result = onChange(modelFields);
            value = result?.Space ?? value;
          }
          setSpace(value);
          setCurrentSpaceValue(undefined);
          setCurrentSpaceDisplayValue("");
        }}
        currentFieldValue={currentSpaceValue}
        label={"Space"}
        items={Space ? [Space] : []}
        hasError={errors?.Space?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Space", currentSpaceValue)
        }
        errorMessage={errors?.Space?.errorMessage}
        getBadgeText={getDisplayValue.Space}
        setFieldValue={(model) => {
          setCurrentSpaceDisplayValue(
            model ? getDisplayValue.Space(model) : ""
          );
          setCurrentSpaceValue(model);
        }}
        inputFieldRef={SpaceRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Space"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Space"
          value={currentSpaceDisplayValue}
          options={spaceRecords
            .filter((r) => !SpaceIdSet.has(getIDValue.Space?.(r)))
            .map((r) => ({
              id: getIDValue.Space?.(r),
              label: getDisplayValue.Space?.(r),
            }))}
          isLoading={SpaceLoading}
          onSelect={({ id, label }) => {
            setCurrentSpaceValue(
              spaceRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSpaceDisplayValue(label);
            runValidationTasks("Space", label);
          }}
          onClear={() => {
            setCurrentSpaceDisplayValue("");
          }}
          defaultValue={Space}
          onChange={(e) => {
            let { value } = e.target;
            fetchSpaceRecords(value);
            if (errors.Space?.hasError) {
              runValidationTasks("Space", value);
            }
            setCurrentSpaceDisplayValue(value);
            setCurrentSpaceValue(undefined);
          }}
          onBlur={() => runValidationTasks("Space", currentSpaceDisplayValue)}
          errorMessage={errors.Space?.errorMessage}
          hasError={errors.Space?.hasError}
          ref={SpaceRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Space")}
        ></Autocomplete>
      </ArrayField>
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
          isDisabled={!(idProp || eventModelProp)}
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
              !(idProp || eventModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
