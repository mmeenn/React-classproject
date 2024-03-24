export function reducer(inexList, action) {
    switch (action.type) {
      case "add_Inex":
        return [action.newInex, ...inexList];
      case "delete_Inex":
        return inexList.filter((e) => e.id !== action.deleteId)
      case "editInex":
        const newInexList = [...inexList];
        //find and update target student
        const idx = inexList.findIndex((e) => e.id === action.editId);
        newInexList[idx] = { ...action.inex };
        return newInexList;
      default:
    }
  }