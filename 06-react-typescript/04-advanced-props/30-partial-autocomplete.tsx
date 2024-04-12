const presetSizes = {
  xs: "0.5rem",
  sm: "1rem",
};

type Size = keyof typeof presetSizes;

/**
 * In this exercise, we're using presetSizes to
 * provide a set of preset sizes for our Icon component.
 *
 * We want to allow users to pass in either a string, or
 * a Size. But there's an issue (see below).
 */

/**
 * INSTRUCTOR'S NOTE:
 * Oddly, this works. Forcing string to intersect with {} does SOMETHING
 * which makes TypeScript do what we want.
 *
 * Honestly, I'm not sure why this works. Some compiler-diving is required
 * to figure it out.
 */
type LooseAutocomplete<T extends string> = T | (string & {});

// You can also ensure all other strings must start with a specified prefix:
// type LooseAutocompleteWithPrefix<T extends string, Prefix extends string> = T | (`${Prefix}${string}` & {});

type LooseSize = LooseAutocomplete<Size>;

export const Icon = (props: { size: LooseSize }) => {
  return (
    <div
      style={{
        width:
          props.size in presetSizes
            ? presetSizes[
                /**
                 * The 'as' is necessary here because TS can't seem to narrow
                 * props.size to Size properly
                 */
                props.size as Size
              ]
            : props.size,
      }}
    />
  );
};

<>
  {/* Autocomplete for sm and xs are no longer working! */}
  {/* We want to have autocomplete for the 'size' while still being */}
  {/* able to pass any value. */}

  {/* 1. Try to find a way to express the type LooseSize in a way that */}
  {/* gives autocomplete for 'sm' and 'xs' while also letting the user */}
  {/* pass any value. */}
  <Icon size="sm"></Icon>
  <Icon size="xs"></Icon>
  <Icon size="10px"></Icon>
</>;

// This is a tough one! If you get stuck, jump right to the solution.
