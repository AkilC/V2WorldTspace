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
import { getSpace, listEvents, listWorlds } from "../graphql/queries";
import { updateEvent, updateSpace } from "../graphql/mutations";
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
export default function SpaceUpdateForm(props) {
  const {
    id: idProp,
    space: spaceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    World: undefined,
    Events: [],
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [World, setWorld] = React.useState(initialValues.World);
  const [WorldLoading, setWorldLoading] = React.useState(false);
  const [worldRecords, setWorldRecords] = React.useState([]);
  const [Events, setEvents] = React.useState(initialValues.Events);
  const [EventsLoading, setEventsLoading] = React.useState(false);
  const [eventsRecords, setEventsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = spaceRecord
      ? { ...initialValues, ...spaceRecord, World, Events: linkedEvents }
      : initialValues;
    setTitle(cleanValues.title);
    setWorld(cleanValues.World);
    setCurrentWorldValue(undefined);
    setCurrentWorldDisplayValue("");
    setEvents(cleanValues.Events ?? []);
    setCurrentEventsValue(undefined);
    setCurrentEventsDisplayValue("");
    setErrors({});
  };
  const [spaceRecord, setSpaceRecord] = React.useState(spaceModelProp);
  const [linkedEvents, setLinkedEvents] = React.useState([]);
  const canUnlinkEvents = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSpace.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSpace
        : spaceModelProp;
      const WorldRecord = record ? await record.World : undefined;
      setWorld(WorldRecord);
      const linkedEvents = record?.Events?.items ?? [];
      setLinkedEvents(linkedEvents);
      setSpaceRecord(record);
    };
    queryData();
  }, [idProp, spaceModelProp]);
  React.useEffect(resetStateValues, [spaceRecord, World, linkedEvents]);
  const [currentWorldDisplayValue, setCurrentWorldDisplayValue] =
    React.useState("");
  const [currentWorldValue, setCurrentWorldValue] = React.useState(undefined);
  const WorldRef = React.createRef();
  const [currentEventsDisplayValue, setCurrentEventsDisplayValue] =
    React.useState("");
  const [currentEventsValue, setCurrentEventsValue] = React.useState(undefined);
  const EventsRef = React.createRef();
  const getIDValue = {
    World: (r) => JSON.stringify({ id: r?.id }),
    Events: (r) => JSON.stringify({ id: r?.id }),
  };
  const WorldIdSet = new Set(
    Array.isArray(World)
      ? World.map((r) => getIDValue.World?.(r))
      : getIDValue.World?.(World)
  );
  const EventsIdSet = new Set(
    Array.isArray(Events)
      ? Events.map((r) => getIDValue.Events?.(r))
      : getIDValue.Events?.(Events)
  );
  const getDisplayValue = {
    World: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Events: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    title: [{ type: "Required" }],
    World: [],
    Events: [],
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
  const fetchEventsRecords = async (value) => {
    setEventsLoading(true);
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
          query: listEvents.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listEvents?.items;
      var loaded = result.filter(
        (item) => !EventsIdSet.has(getIDValue.Events?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setEventsRecords(newOptions.slice(0, autocompleteLength));
    setEventsLoading(false);
  };
  React.useEffect(() => {
    fetchWorldRecords("");
    fetchEventsRecords("");
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
          title,
          World: World ?? null,
          Events: Events ?? null,
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
          const eventsToLink = [];
          const eventsToUnLink = [];
          const eventsSet = new Set();
          const linkedEventsSet = new Set();
          Events.forEach((r) => eventsSet.add(getIDValue.Events?.(r)));
          linkedEvents.forEach((r) =>
            linkedEventsSet.add(getIDValue.Events?.(r))
          );
          linkedEvents.forEach((r) => {
            if (!eventsSet.has(getIDValue.Events?.(r))) {
              eventsToUnLink.push(r);
            }
          });
          Events.forEach((r) => {
            if (!linkedEventsSet.has(getIDValue.Events?.(r))) {
              eventsToLink.push(r);
            }
          });
          eventsToUnLink.forEach((original) => {
            if (!canUnlinkEvents) {
              throw Error(
                `Event ${original.id} cannot be unlinked from Space because undefined is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateEvent.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                  },
                },
              })
            );
          });
          eventsToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateEvent.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            title: modelFields.title,
            wID: modelFields?.World?.id ?? null,
          };
          promises.push(
            client.graphql({
              query: updateSpace.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: spaceRecord.id,
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
      {...getOverrideProps(overrides, "SpaceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              World,
              Events,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              title,
              World: value,
              Events,
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
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              World,
              Events: values,
            };
            const result = onChange(modelFields);
            values = result?.Events ?? values;
          }
          setEvents(values);
          setCurrentEventsValue(undefined);
          setCurrentEventsDisplayValue("");
        }}
        currentFieldValue={currentEventsValue}
        label={"Events"}
        items={Events}
        hasError={errors?.Events?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Events", currentEventsValue)
        }
        errorMessage={errors?.Events?.errorMessage}
        getBadgeText={getDisplayValue.Events}
        setFieldValue={(model) => {
          setCurrentEventsDisplayValue(
            model ? getDisplayValue.Events(model) : ""
          );
          setCurrentEventsValue(model);
        }}
        inputFieldRef={EventsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Events"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Event"
          value={currentEventsDisplayValue}
          options={eventsRecords.map((r) => ({
            id: getIDValue.Events?.(r),
            label: getDisplayValue.Events?.(r),
          }))}
          isLoading={EventsLoading}
          onSelect={({ id, label }) => {
            setCurrentEventsValue(
              eventsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEventsDisplayValue(label);
            runValidationTasks("Events", label);
          }}
          onClear={() => {
            setCurrentEventsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchEventsRecords(value);
            if (errors.Events?.hasError) {
              runValidationTasks("Events", value);
            }
            setCurrentEventsDisplayValue(value);
            setCurrentEventsValue(undefined);
          }}
          onBlur={() => runValidationTasks("Events", currentEventsDisplayValue)}
          errorMessage={errors.Events?.errorMessage}
          hasError={errors.Events?.hasError}
          ref={EventsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Events")}
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
          isDisabled={!(idProp || spaceModelProp)}
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
              !(idProp || spaceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
