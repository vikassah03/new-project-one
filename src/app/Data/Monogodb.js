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
    }
];
