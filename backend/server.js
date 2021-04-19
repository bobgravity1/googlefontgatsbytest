const express=require('express')

const expressGraphQL = require('express-graphql').graphqlHTTP

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
}=require('graphql')

const app=express();

const schema=new GraphQLSchema({
  query:new GraphQLObjectType({
    name:'HelloWorld',
    fields:()=>({
      message:{
        type:GraphQLString,
        resolve:()=>'Hello World'
      }
    })
  })
})
app.get('/', (req, res)=>{
  res.send(`yoooo ${msg}`)
})

const msg='soupppppp'
app.use('/graphql', expressGraphQL({
  schema:schema,
  graphiql:true
}))

app.listen(420, ()=>{
  console.log(`listening on port 420 ${msg}`)
})
