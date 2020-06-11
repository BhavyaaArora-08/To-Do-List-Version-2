// // SET_FILTER_ALL
// export const setFilterAll = () => {
//   return {
//     type: "SET_FILTER_ALL",
//   };
// };
// // SET_FILTER_DONE
// export const setFilterDone = () => {
//   return {
//     type: "SET_FILTER_DONE",
//   };
// };

// // SET_FILTER_TODO
// export const setFilterTodo = () => {
//   return {
//     type: "SET_FILTER_TODO",
//   };
// };

export default (filter) => {
  return {
    type: "SET_FILTER",
    filter,
  };
};
