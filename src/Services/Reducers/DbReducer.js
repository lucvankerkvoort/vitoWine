import { db } from "../Firebase/Firebase";

const DbReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL": {
      let collection = [];
      db.collection("wine")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            console.log(doc.data());
            collection.push(doc.data());
          });
        });
      return {
        ...state,
        db: collection,
      };
    }
    default:
      return state;
  }
};

export default DbReducer;
