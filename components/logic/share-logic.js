export const dataAddKey = (dataInput) => {
  if (dataInput) {
    return dataInput.map((user, index) => {
      return {
        ...user,
        key: `user${index}`,
      };
    });
  }
};
