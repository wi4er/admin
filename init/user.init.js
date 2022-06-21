let user = db.getSiblingDB("user");

user.createUser(
    {
        user: "user",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "user"
            }
        ]
    }
);

user.runCommand(
    {
        insert: "uniq",
        documents: [{
            _id: "EMAIL",
        }]
    }
);

user.runCommand(
    {
        insert: "contents",
        documents: [{
            _id: new ObjectId("000000000000000000000001"),
            uniq: [{
                uniq: "EMAIL",
                value: "admin@mail.com"
            }]
        }]
    }
);


