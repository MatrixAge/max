import { xget, xfetch } from '../utils/fetch'

function Index({ students }) {
      console.log(students);

      return (
            <div className="w_100 border_box">
                  Index
            </div>
      )
}

Index.getInitialProps = async () => {
      //使用常规接口
      // const res = await xget('http://localhost:3000/student')

      //使用graphql接口
      const query = `
            query{
                  student{
                        _id
                        name
                  }
            }
      `
      const res = await xfetch({ query })

      return {
            students: res.data.student
      }
}

export default Index