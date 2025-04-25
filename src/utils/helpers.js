export const getQueryParams = (search) => {
    return Object.fromEntries(new URLSearchParams(search));
  };
  
  export const updateURLParams = (filters, navigate) => {
    const params = new URLSearchParams(filters).toString();
    navigate(`/?${params}`);
  };
  
