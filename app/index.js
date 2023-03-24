import Realm from "realm";

const UserSchema = {
  name: "User",
  properties: {
    name: "string",
    age: "int",
  },
};

Realm.open({ schema: [UserSchema] })
  .then((realm) => {
    console.log("Realm database opened successfully");
  })
  .catch((error) => {
    console.log(`Error opening Realm database: ${error}`);
  });

Realm.open({ schema: [UserSchema] })
  .then((realm) => {
    realm.write(() => {
      const user = realm.create("User", { name: "John Doe", age: 30 });
      console.log(`User added to Realm: ${JSON.stringify(user)}`);
    });
  })
  .catch((error) => {
    console.log(`Error opening Realm database: ${error}`);
  });

Realm.open({ schema: [UserSchema] })
  .then((realm) => {
    const users = realm.objects("User");
    console.log(`Users in Realm: ${JSON.stringify(users)}`);
  })
  .catch((error) => {
    console.log(`Error opening Realm database: ${error}`);
  });

export default function DataBaseComp() {
  return null;
}
