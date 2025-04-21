const handleIsActive = (name: string) => {
  const path = window.location.pathname;
  const updatedName = name.replace(/\s/g, '').toLocaleLowerCase();
  const updatedPath = path
    ?.split('/')
    ?.slice(1)[0]
    ?.replace(/-/g, '')
    ?.toLocaleLowerCase();

  return updatedName.includes(updatedPath);
};

export default handleIsActive;
