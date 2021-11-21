export const filterClassNames = (props: string[]): string | undefined => {
  // filter text props to only those that are truthy
  const filterProps = props.filter(Boolean).join(" ");

  // if filteredTextProps is empty string, remove it
  const filteredClassNameString = filterProps ? filterProps : undefined;

  return filteredClassNameString;
};
