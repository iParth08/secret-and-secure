export const getInitials = (name: string) => {
  const names = name.split(" ");
  let initials = "";
  for (let i = 0; i < names.length; i++) {
    initials += names[i].charAt(0).toUpperCase();
  }
  return initials;
};

//filter function

//sort by updates
