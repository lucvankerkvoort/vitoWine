import { db } from "../Firebase/Firebase";

const DbReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL": {
      let collection = [];
      db.collection(action.payload)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            collection.push(doc.data());
          });
        });
      return {
        ...state,
        [action.payload]: collection,
      };
    }
    case "GET_ONE": {
      const selected = state[action.payload.type].filter(
        (items) => items.id === action.payload.id
      );
      return {
        ...state,
        selection: selected[0],
      };
    }
    default:
      return state;
  }
};

export default DbReducer;
