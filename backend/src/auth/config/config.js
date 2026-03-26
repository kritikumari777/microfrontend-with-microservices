if(!process.env.MONGO_URL){
    throw new Error("MONGO_URL is not defind in the environment variables")
}

if(!process.env.JWT_SECRET){
    throw new Error("JWT Secret is not defind")
}

const config = {
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET:process.env.JWT_SECRET
}

export default config