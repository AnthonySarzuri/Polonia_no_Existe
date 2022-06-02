const {Client}=require('pg')

async function getConnection(){
    const client =new Client({
        host:'172.21.0.2',
        port:5432,
        user:root,
        database:my_db
    }) 
    await client.connect()
    return client
}
module.exports=getConnection

// POSTGRES_DB=my_db
// - POSTGRES_USER=root
// - POSTGRES_PASSWORD=admin123