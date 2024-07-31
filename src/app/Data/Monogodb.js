export const questions = [
    {
        question: "What is MongoDB?",
        options: [
            "A relational database management system",
            "A NoSQL database management system",
            "A programming language",
            "An operating system"
        ],
        answer: 1
    },
    {
        question: "Which data model does MongoDB use?",
        options: [
            "Relational model",
            "Document model",
            "Object-oriented model",
            "Key-value model"
        ],
        answer: 1
    },
    {
        question: "What is BSON in MongoDB?",
        options: [
            "Binary Structured Object Notation",
            "Binary Standard Object Notation",
            "Binary JSON",
            "Binary Serialized Object Notation"
        ],
        answer: 2
    },
    {
        question: "Which command is used to start the MongoDB server?",
        options: [
            "mongod",
            "mongo",
            "start mongodb",
            "mongo server"
        ],
        answer: 0
    },
    {
        question: "What is the default port number for MongoDB?",
        options: [
            "27017",
            "3306",
            "1433",
            "5432"
        ],
        answer: 0
    },
    {
        question: "Which query language is used by MongoDB?",
        options: [
            "SQL",
            "NoSQL",
            "MQL",
            "DDL"
        ],
        answer: 2
    },
    {
        question: "Which data structure in MongoDB stores data in a format similar to JSON?",
        options: [
            "Table",
            "Collection",
            "Document",
            "Row"
        ],
        answer: 2
    },
    {
        question: "What is the primary key in MongoDB called?",
        options: [
            "_id",
            "key",
            "primary",
            "id"
        ],
        answer: 0
    },
    {
        question: "Which command is used to create a new database in MongoDB?",
        options: [
            "create database",
            "use",
            "make db",
            "db.createCollection"
        ],
        answer: 1
    },
    {
        question: "What is a Replica Set in MongoDB?",
        options: [
            "A group of servers that maintains copies of the same data",
            "A type of query in MongoDB",
            "A data structure to store JSON documents",
            "A way to index MongoDB collections"
        ],
        answer: 0
    },
    {
        question: "Which index type is used to create a unique index in MongoDB?",
        options: [
            "uniqueIndex",
            "unique",
            "uniqueField",
            "ensureIndex"
        ],
        answer: 1
    },
    {
        question: "How can you perform aggregation in MongoDB?",
        options: [
            "Using find() method",
            "Using aggregate() method",
            "Using group() method",
            "Using filter() method"
        ],
        answer: 1
    },
    {
        question: "Which command is used to drop a collection in MongoDB?",
        options: [
            "db.dropCollection()",
            "collection.drop()",
            "delete collection",
            "drop db"
        ],
        answer: 0
    },
    {
        question: "What does sharding do in MongoDB?",
        options: [
            "Indexes data based on a shard key",
            "Distributes data across multiple servers",
            "Filters data in a collection",
            "Creates a backup of the database"
        ],
        answer: 1
    },
    {
        question: "How do you connect to a MongoDB database from the command line interface?",
        options: [
            "mongo connect",
            "use mongodb",
            "mongo shell",
            "mongo connectDB"
        ],
        answer: 2
    },
    {
        question: "Which operator is used for querying in MongoDB to specify a condition?",
        options: [
            "$condition",
            "$where",
            "$filter",
            "$match"
        ],
        answer: 3
    },
    {
        question: "What does TTL index do in MongoDB?",
        options: [
            "Ensures unique values in a field",
            "Automatically removes documents from a collection after a certain time",
            "Indexes data based on time",
            "Allows indexing of embedded documents"
        ],
        answer: 1
    },
    {
        question: "Which method is used to update documents in MongoDB?",
        options: [
            "modify()",
            "update()",
            "edit()",
            "change()"
        ],
        answer: 1
    },
    {
        question: "How can you perform a backup of a MongoDB database?",
        options: [
            "Using mongoexport command",
            "Using mongodump command",
            "Using db.backup() method",
            "Using copy and paste from the shell"
        ],
        answer: 1
    },
    {
        question: "Which command is used to create an index in MongoDB?",
        options: [
            "db.index()",
            "createIndex()",
            "ensureIndex()",
            "index.create()"
        ],
        answer: 1
    },
    {
        question: "What does the explain() method do in MongoDB?",
        options: [
            "Provides information on indexes used for a query",
            "Explains the structure of a collection",
            "Displays MongoDB server status",
            "Explains how to use aggregation"
        ],
        answer: 0
    },
    {
        question: "What is GridFS in MongoDB?",
        options: [
            "A data structure to store large files",
            "A command to execute grid operations",
            "A type of data encryption",
            "A tool to create grids in MongoDB"
        ],
        answer: 0
    },
    {
        question: "Which option is used to limit the number of documents returned in a MongoDB query?",
        options: [
            ".limit()",
            ".count()",
            ".skip()",
            ".find()"
        ],
        answer: 0
    },
    {
        question: "How do you remove documents from a MongoDB collection?",
        options: [
            "delete()",
            "remove()",
            "discard()",
            "drop()"
        ],
        answer: 1
    },
    {
        question: "Which method is used to sort documents in MongoDB?",
        options: [
            ".sort()",
            ".order()",
            ".by()",
            ".group()"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of the $push operator in MongoDB?",
        options: [
            "To remove elements from an array",
            "To add elements to the end of an array",
            "To update an existing document",
            "To create a new document"
        ],
        answer: 1
    },
    {
        question: "Which method is used to perform a text search in MongoDB?",
        options: [
            "search()",
            "find()",
            "text()",
            "query()"
        ],
        answer: 2
    },
    {
        question: "What is the role of WiredTiger storage engine in MongoDB?",
        options: [
            "To handle distributed transactions",
            "To provide data encryption",
            "To manage data compression",
            "To manage data storage and retrieval"
        ],
        answer: 3
    },
    {
        question: "Which method is used to drop a database in MongoDB?",
        options: [
            "db.remove()",
            "dropDatabase()",
            "deleteDatabase()",
            "removeDB()"
        ],
        answer: 1
    },
    {
        question: "What is the role of a MongoDB Atlas?",
        options: [
            "A tool to analyze MongoDB queries",
            "A GUI for MongoDB",
            "A cloud-based service for MongoDB",
            "A monitoring tool for MongoDB"
        ],
        answer: 2
    },
    {
        question: "What does the 'shard key' do in MongoDB?",
        options: [
            "Determines the distribution of data across shards",
            "Indexes documents in a collection",
            "Ensures data integrity",
            "Manages transactions across shards"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of the 'arbiter' in a MongoDB replica set?",
        options: [
            "To store data in case of primary node failure",
            "To handle read and write operations",
            "To participate in elections but does not hold data",
            "To backup data to secondary nodes"
        ],
        answer: 2
    },
    {
        question: "Which command provides the current status of the replica set?",
        options: [
            "rs.status()",
            "db.replicaStatus()",
            "rs.info()",
            "replicaStatus.show()"
        ],
        answer: 0
    },
    {
        question: "How can you improve read performance in a MongoDB sharded cluster?",
        options: [
            "Increase the number of shards",
            "Use compound indexes",
            "Enable journaling",
            "Use secondary preferred read preference"
        ],
        answer: 3
    },
    {
        question: "What is the use of the $lookup aggregation stage?",
        options: [
            "To merge documents from multiple collections",
            "To look up documents by a specific field",
            "To join documents from different collections",
            "To create indexes on fields"
        ],
        answer: 2
    },
    {
        question: "Which of the following is a valid BSON data type?",
        options: [
            "double",
            "float",
            "currency",
            "int"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of the 'write concern' in MongoDB?",
        options: [
            "To specify the level of acknowledgment requested from MongoDB for write operations",
            "To ensure data is always written to disk",
            "To maintain the order of write operations",
            "To manage the consistency of read operations"
        ],
        answer: 0
    },
    {
        question: "What does the 'caped' option do when creating a collection?",
        options: [
            "Sets a maximum size for the collection in bytes",
            "Limits the number of documents in the collection",
            "Creates a fixed-size collection that overwrites oldest entries",
            "Indexes all fields automatically"
        ],
        answer: 2
    },
    {
        question: "Which method is used to perform a bulk write operation in MongoDB?",
        options: [
            "bulkWrite()",
            "batchInsert()",
            "multiWrite()",
            "bulkInsert()"
        ],
        answer: 0
    },
    {
        question: "In MongoDB, what is an 'epoch' in the context of sharding?",
        options: [
            "The starting point in time for a shard key",
            "A unique identifier for the sharding configuration",
            "The time duration after which data is rebalanced",
            "The version number of a shard"
        ],
        answer: 1
    },
    {
        question: "How do you create a text index in MongoDB?",
        options: [
            "db.collection.createIndex({ field: 'text' })",
            "db.collection.createTextIndex({ field: 1 })",
            "db.collection.createIndex({ field: 'text' })",
            "db.collection.createIndex({ field: 'text' })"
        ],
        answer: 0
    },
    {
        question: "What is the default storage engine for MongoDB?",
        options: [
            "InnoDB",
            "RocksDB",
            "WiredTiger",
            "TokuMX"
        ],
        answer: 2
    },
    {
        question: "Which of the following is NOT a MongoDB deployment option?",
        options: [
            "Standalone",
            "Cluster",
            "Replica Set",
            "Sharded Cluster"
        ],
        answer: 1
    },
    {
        question: "What does the $facet aggregation stage do?",
        options: [
            "Allows multiple aggregation pipelines to run within a single stage",
            "Partitions data into separate output collections",
            "Filters documents based on conditions",
            "Groups documents by a specified expression"
        ],
        answer: 0
    },
    {
        question: "How can you handle duplicate keys in a MongoDB collection?",
        options: [
            "Use a unique index",
            "Manually check for duplicates",
            "Enable duplication prevention",
            "Use the $key option"
        ],
        answer: 0
    },
    {
        question: "Which option is used to optimize MongoDB queries?",
        options: [
            "use .hint() method",
            "use .optimize() method",
            "use .queryOptimizer() method",
            "use .index() method"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of MongoDB's `mongostat` tool?",
        options: [
            "To display a summary of current MongoDB server statistics",
            "To perform backups of the MongoDB database",
            "To restore data from a backup",
            "To manage user accounts and permissions"
        ],
        answer: 0
    },
    {
        question: "How do you rename a collection in MongoDB?",
        options: [
            "db.collection.rename()",
            "db.collection.renameCollection()",
            "db.collection.renameTo()",
            "db.collection.rename()"
        ],
        answer: 1
    },
    {
        question: "Which of the following is a feature of MongoDB's aggregation framework?",
        options: [
            "Data validation",
            "Data encryption",
            "Data aggregation",
            "Data replication"
        ],
        answer: 2
    },
    {
        question: "What does the `mongorestore` tool do?",
        options: [
            "Restores data from a binary database dump",
            "Backs up a MongoDB database",
            "Analyzes MongoDB queries",
            "Restores only the indexes"
        ],
        answer: 0
    },
    {
        question: "What is the `balancer` in MongoDB?",
        options: [
            "A tool for balancing read and write loads",
            "A process that moves chunks between shards",
            "A method for balancing data in a collection",
            "A feature for balancing user connections"
        ],
        answer: 1
    },
    {
        question: "Which command is used to grant roles to a user in MongoDB?",
        options: [
            "grantRoles()",
            "db.grant()",
            "db.updateUser()",
            "db.addRole()"
        ],
        answer: 2
    },
    {
        question: "What is the role of `mongos` in a sharded cluster?",
        options: [
            "To manage storage and retrieval of data",
            "To act as a query router for the sharded cluster",
            "To handle replication of data",
            "To backup and restore data"
        ],
        answer: 1
    },
    {
        question: "How can you increase the maximum BSON document size in MongoDB?",
        options: [
            "Modify the configuration file",
            "Increase the server's RAM",
            "This limit cannot be increased",
            "Use the `maxBsonSize` parameter"
        ],
        answer: 2
    },
    {
        question: "What is the primary function of the `mongotop` utility?",
        options: [
            "To show the top collections by memory usage",
            "To display a summary of database activity",
            "To analyze performance of MongoDB queries",
            "To display the amount of time a MongoDB instance spends reading and writing data"
        ],
        answer: 3
    },
    {
        question: "Which operator can you use to perform a case-insensitive search in MongoDB?",
        options: [
            "$regex",
            "$text",
            "$case",
            "$search"
        ],
        answer: 0
    },
];
