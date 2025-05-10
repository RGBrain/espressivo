export const in_object_make_any_empty_string_values_to_be_null_instead_and_return_new_object = (object_argument) => {
  for (let key in object_argument) {
    // first check is this property value a string
    if (typeof object_argument[key] === "string" || object_argument[key] instanceof String) {
      if (object_argument[key].trim().length === 0) {
        object_argument[key] = null;
      }
    }
  }

  return object_argument;
};

export const sort_object_by_key_alphabetically_and_return_sorted_object = (original_object) => {
  const sorted_object = Object.keys(original_object)
    .sort()
    .reduce((obj, key) => {
      obj[key] = original_object[key];
      return obj;
    }, {});

  return sorted_object;
};
