const { GraphQLObjectType, GraphQLString } = require('graphql')
const { GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql')

const mongoose = require('mongoose')

const Info = mongoose.model('Info')

//定义时间日期 数据类型
const objType = new GraphQLObjectType({
      name: 'meta',
      fields: {
            createdAt: {
                  type: GraphQLString
            },
            updateAt: {
                  type: GraphQLString
            }
      }
})

let InfoType = new GraphQLObjectType({
      name: 'Info',
      fields: {
            _id: {
                  type: GraphQLID
            },
            height: {
                  type: GraphQLString
            },
            weight: {
                  type: GraphQLString
            },
            hobby: {
                  type: new GraphQLList(GraphQLString)
            },
            meta: {
                  type: objType
            }
      }
})


const infos = {
      type: new GraphQLList(InfoType),
      args: {},
      resolve(root, params, options) {
            return Info.find({}).exec()
      }
}


const info = {
      type: InfoType,
      args: {
            id: {
                  name: 'id',
                  type: new GraphQLNonNull(GraphQLID)
            }
      },
      resolve(root, params, options) {
            return Info.findOne({
                  _id: params.id
            }).exec()
      }
}

module.exports = {
      InfoType,
      infos,
      info
}
