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
        insert: "hashes",
        documents: [{
            user: "000000000000000000000001",
            hash: "123456789afb1927c262f4448a75cd71d6edf1c5",
            algorithm: "md5"
        }]
    }
);

