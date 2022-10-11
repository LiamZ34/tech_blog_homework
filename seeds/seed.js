const sequelize = require("../config/connection");
const { User, Comment, Post } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");
const { match } = require("assert");


const seedDatabase = async () => {
    await sequelize.sync({ 
        force:true
    });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await Post.create({
            ...post,
            userId: users[match.floor(Nath.random() * users.length)].id,
        });
    }
    process.exit(0);
}

seedDatabase();