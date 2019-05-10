const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const { info, infos } = require('./info.js')
const { student } = require('./student')

//导出GraphQlSchema模块
module.exports = new GraphQLSchema({
      query: new GraphQLObjectType({
            name: 'Queries',
            fields: {
                  infos,
                  info,
                  student
            }
      })
})
