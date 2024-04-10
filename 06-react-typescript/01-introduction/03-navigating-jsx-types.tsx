export const Component = () => {
  return (
    <div
      //? How do I figure out what type aria-posinset expects?
      // Hover over the property: it expects `number | undefined`
      aria-posinset={69}
      //? How do I figure out what type onChange expects?
      // Hover over the property: it expects `FormEventHandler<HTMLDivElement>`
      // Start typing out an event handler function and you'll get type hints!
      onChange={(event) => {
        console.log("onChange");
      }}

      //? How do I get autocomplete with JSX?
      // Hotkey: Cmd+I
    />
  );
};
