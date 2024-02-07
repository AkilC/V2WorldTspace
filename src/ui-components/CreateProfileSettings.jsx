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
import { listAvatars } from "../graphql/queries";
import {
  createProfile,
  updateAvatar,
  updateProfile,
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
export default function CreateProfileSettings(props) {
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
    username: "",
    name: "",
    instagram: "",
    twitter: "",
    Avatar: undefined,
    bio: "",
    baseAvatarColor: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [name, setName] = React.useState(initialValues.name);
  const [instagram, setInstagram] = React.useState(initialValues.instagram);
  const [twitter, setTwitter] = React.useState(initialValues.twitter);
  const [Avatar, setAvatar] = React.useState(initialValues.Avatar);
  const [AvatarLoading, setAvatarLoading] = React.useState(false);
  const [avatarRecords, setAvatarRecords] = React.useState([]);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [baseAvatarColor, setBaseAvatarColor] = React.useState(
    initialValues.baseAvatarColor
  );
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setName(initialValues.name);
    setInstagram(initialValues.instagram);
    setTwitter(initialValues.twitter);
    setAvatar(initialValues.Avatar);
    setCurrentAvatarValue(undefined);
    setCurrentAvatarDisplayValue("");
    setBio(initialValues.bio);
    setBaseAvatarColor(initialValues.baseAvatarColor);
    setErrors({});
  };
  const [currentAvatarDisplayValue, setCurrentAvatarDisplayValue] =
    React.useState("");
  const [currentAvatarValue, setCurrentAvatarValue] = React.useState(undefined);
  const AvatarRef = React.createRef();
  const getIDValue = {
    Avatar: (r) => JSON.stringify({ id: r?.id }),
  };
  const AvatarIdSet = new Set(
    Array.isArray(Avatar)
      ? Avatar.map((r) => getIDValue.Avatar?.(r))
      : getIDValue.Avatar?.(Avatar)
  );
  const getDisplayValue = {
    Avatar: (r) => `${r?.model ? r?.model + " - " : ""}${r?.id}`,
  };
  const validations = {
    username: [{ type: "Required" }],
    name: [],
    instagram: [],
    twitter: [],
    Avatar: [],
    bio: [],
    baseAvatarColor: [],
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
  const fetchAvatarRecords = async (value) => {
    setAvatarLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ model: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listAvatars.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAvatars?.items;
      var loaded = result.filter(
        (item) => !AvatarIdSet.has(getIDValue.Avatar?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setAvatarRecords(newOptions.slice(0, autocompleteLength));
    setAvatarLoading(false);
  };
  React.useEffect(() => {
    fetchAvatarRecords("");
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
          username,
          name,
          instagram,
          twitter,
          Avatar,
          bio,
          baseAvatarColor,
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
            username: modelFields.username,
            name: modelFields.name,
            instagram: modelFields.instagram,
            twitter: modelFields.twitter,
            profileAvatarId: modelFields?.Avatar?.id,
            bio: modelFields.bio,
            baseAvatarColor: modelFields.baseAvatarColor,
          };
          const profile = (
            await client.graphql({
              query: createProfile.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createProfile;
          const promises = [];
          const avatarToLink = modelFields.Avatar;
          if (avatarToLink) {
            promises.push(
              client.graphql({
                query: updateAvatar.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: Avatar.id,
                    avatarProfileId: profile.id,
                  },
                },
              })
            );
            const profileToUnlink = await avatarToLink.Profile;
            if (profileToUnlink) {
              promises.push(
                client.graphql({
                  query: updateProfile.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: profileToUnlink.id,
                      profileAvatarId: null,
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
      {...getOverrideProps(overrides, "CreateProfileSettings")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Username</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              name,
              instagram,
              twitter,
              Avatar,
              bio,
              baseAvatarColor,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name: value,
              instagram,
              twitter,
              Avatar,
              bio,
              baseAvatarColor,
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
        label="Instagram"
        isRequired={false}
        isReadOnly={false}
        value={instagram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              instagram: value,
              twitter,
              Avatar,
              bio,
              baseAvatarColor,
            };
            const result = onChange(modelFields);
            value = result?.instagram ?? value;
          }
          if (errors.instagram?.hasError) {
            runValidationTasks("instagram", value);
          }
          setInstagram(value);
        }}
        onBlur={() => runValidationTasks("instagram", instagram)}
        errorMessage={errors.instagram?.errorMessage}
        hasError={errors.instagram?.hasError}
        {...getOverrideProps(overrides, "instagram")}
      ></TextField>
      <TextField
        label="Twitter"
        isRequired={false}
        isReadOnly={false}
        value={twitter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              instagram,
              twitter: value,
              Avatar,
              bio,
              baseAvatarColor,
            };
            const result = onChange(modelFields);
            value = result?.twitter ?? value;
          }
          if (errors.twitter?.hasError) {
            runValidationTasks("twitter", value);
          }
          setTwitter(value);
        }}
        onBlur={() => runValidationTasks("twitter", twitter)}
        errorMessage={errors.twitter?.errorMessage}
        hasError={errors.twitter?.hasError}
        {...getOverrideProps(overrides, "twitter")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              username,
              name,
              instagram,
              twitter,
              Avatar: value,
              bio,
              baseAvatarColor,
            };
            const result = onChange(modelFields);
            value = result?.Avatar ?? value;
          }
          setAvatar(value);
          setCurrentAvatarValue(undefined);
          setCurrentAvatarDisplayValue("");
        }}
        currentFieldValue={currentAvatarValue}
        label={"Avatar"}
        items={Avatar ? [Avatar] : []}
        hasError={errors?.Avatar?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Avatar", currentAvatarValue)
        }
        errorMessage={errors?.Avatar?.errorMessage}
        getBadgeText={getDisplayValue.Avatar}
        setFieldValue={(model) => {
          setCurrentAvatarDisplayValue(
            model ? getDisplayValue.Avatar(model) : ""
          );
          setCurrentAvatarValue(model);
        }}
        inputFieldRef={AvatarRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Avatar"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Avatar"
          value={currentAvatarDisplayValue}
          options={avatarRecords
            .filter((r) => !AvatarIdSet.has(getIDValue.Avatar?.(r)))
            .map((r) => ({
              id: getIDValue.Avatar?.(r),
              label: getDisplayValue.Avatar?.(r),
            }))}
          isLoading={AvatarLoading}
          onSelect={({ id, label }) => {
            setCurrentAvatarValue(
              avatarRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAvatarDisplayValue(label);
            runValidationTasks("Avatar", label);
          }}
          onClear={() => {
            setCurrentAvatarDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchAvatarRecords(value);
            if (errors.Avatar?.hasError) {
              runValidationTasks("Avatar", value);
            }
            setCurrentAvatarDisplayValue(value);
            setCurrentAvatarValue(undefined);
          }}
          onBlur={() => runValidationTasks("Avatar", currentAvatarDisplayValue)}
          errorMessage={errors.Avatar?.errorMessage}
          hasError={errors.Avatar?.hasError}
          ref={AvatarRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Avatar")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              instagram,
              twitter,
              Avatar,
              bio: value,
              baseAvatarColor,
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextField>
      <TextField
        label="Base avatar color"
        isRequired={false}
        isReadOnly={false}
        value={baseAvatarColor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              instagram,
              twitter,
              Avatar,
              bio,
              baseAvatarColor: value,
            };
            const result = onChange(modelFields);
            value = result?.baseAvatarColor ?? value;
          }
          if (errors.baseAvatarColor?.hasError) {
            runValidationTasks("baseAvatarColor", value);
          }
          setBaseAvatarColor(value);
        }}
        onBlur={() => runValidationTasks("baseAvatarColor", baseAvatarColor)}
        errorMessage={errors.baseAvatarColor?.errorMessage}
        hasError={errors.baseAvatarColor?.hasError}
        {...getOverrideProps(overrides, "baseAvatarColor")}
      ></TextField>
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
