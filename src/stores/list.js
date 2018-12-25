import { observable, action ,autorun} from 'mobx';


const ListStore = observable([
  { title: "Spoil tea", completed: true },
  { title: "Make coffee", completed: false },
  { title: "orign juice", completed: false }
]);

autorun(() => {
  console.log("Remaining:", ListStore
      .filter(todo => !todo.completed)
      .map(todo => todo.title)
      .join(", ")
  );
});

ListStore[0].completed = false;
ListStore[3] = { title: 'Take a nap', completed: false };
export default ListStore;
