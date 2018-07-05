import t from 'tcomb-form-native'

export default {
  auth: {
    type: t.struct({
      email: t.String
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
  }
}