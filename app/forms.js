import t from 'tcomb-form-native'

export default {
  register: {
    type: t.struct({
      email: t.String,
      password: t.String,
      terms: t.Boolean
    }),
    options: {
      fields: {
        password: {
          secureTextEntry: true
        },
        terms: {
          label: 'I agree to the terms and conditions.'
        }
      }

    }
  },
  login: {
    type: t.struct({
      email: t.String,
      password: t.String
    }),
    options: {
      fields: {
        password: {
          secureTextEntry: true
        }
      }
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