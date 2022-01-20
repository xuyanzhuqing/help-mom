// 过滤器 | 多字段过滤
const filter = (req) => {
  const { conditionProp, condition, spr = ',' } = req.query
  const props = []
  const values = []

  if (conditionProp.includes(spr) && condition.includes(spr)) {
    props.push(...conditionProp.split(spr))
    values.push(...condition.split(spr))
  } else {
    props.push(conditionProp)
    values.push(condition)
  }

  return (item) => {
    for (const index in props) {
      const prop = props[index]
      if (item[prop] !== values[index]) {
        return false
      }
    }
    return true
  }
}

export default (db) => {
    return async function (req, res) {
      try {
        await db.read()
        const result = db.data.filter(filter(req))
        res.json({ code: 200, result })
      } catch (error) {
        console.info(error)
        res.json({ code: 500, error })
      }
    }
}