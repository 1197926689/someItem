import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient } from 'mongodb'
module.exports = async (req: NowRequest, res: NowResponse) => {
    var data = {
        msg: "hello world!"
    }
    res.status(200).json(data);
}

const CONNECTION_STRING = "mongodb+srv://huangkemeng:yzh1998715@cluster0.u0zuh.mongodb.net/test";
module.exports = async (req: NowRequest, res: NowResponse) => {
    const client = await MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = await client.db('[hkm-story]');
    var result = await db.collection("[northwind]").find().toArray();
    res.status(200).json(result);
}