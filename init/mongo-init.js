let auth = db.getSiblingDB("auth");

auth.createUser(
    {
        user: "auth",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "auth"
            }
        ]
    }
);

auth.runCommand(
    {
        insert: "users",
        documents: [{
            _id: new ObjectId("000122333444455555666666"),
            admin: true,
        }]
    }
);

auth.runCommand(
    {
        insert: "auths",
        documents: [{
            user: "000122333444455555666666",
            hash: "21232f297a57a5a743894a0e4a801fc3"
        }],
    }
);

