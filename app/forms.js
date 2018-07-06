import t from 'tcomb-form-native'

export default {
  auth: {
    type: t.struct({
      email: t.maybe(t.String)
    }),
    options: {
      fields: {
        email: {
          label: 'What is your email?'
        }
      }
    }
  },
  login: {
    type: t.struct({
      name: t.String,
      password: t.String,
      terms: t.Boolean
    }),
    options: {

    }
  },
  todoCreate: {
    type: t.struct({
      title: t.String,
      description: t.String
    }),
    options: {}
  }
}