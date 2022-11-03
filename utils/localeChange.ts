const handleLocaleChange = (event, router) => {
  const value = event.target.value;

  router.push(router.route, router.asPath, {
    locale: value,
  });
};


export default handleLocaleChange;
