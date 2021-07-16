const { MongoClient } = require("mongodb");

const MONGODB_URI = "mongodb+srv://db_user_bocc:Pf880LKDydhD3GcH@cluster0.u9ylx.mongodb.net";

let dbConnection = null;

const connectToDatabase = async() => {
  if (dbConnection) {
    return dbConnection;
  }
  const client = await MongoClient.connect(MONGODB_URI);
  const db = await client.db("bocc_interview");
  dbConnection = db;
  return db;
}

exports.getCustomer = async (event) => {
  const db = await connectToDatabase();
  let nit = null;
  if(event.pathParameters){
      if(event.pathParameters.nit){
        nit = event.pathParameters.nit   
      }else{
          nit = '800220154'
      }
  }else{
      nit='800220154'
  }
  const customer = await db.collection("bocc_customers").findOne({nit});
  return {
        statusCode:200,
        headers:{
          "Access-Control-Allow-Origin":'*',
          "Access-Control-Allow-Headers":'Content-Type',
          "Access-Control-Allow-Methods":'GET, OPTIONS',
          "Content-Type":'application/json'
        },
        body:JSON.stringify(customer)
  };  
}
