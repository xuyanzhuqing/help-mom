// 查询
import lodash from 'lodash'

export default (db) => {
    return async function (req, res) {
      const { conditionProp, condition } = req.query
      try {
        await db.read()
        const result = db.data.filter(v => v[conditionProp] == condition)
        res.json({ code: 200, result })
      } catch (error) {
        console.info(error)
          res.json({ code: 500, error })
      }
    }
}