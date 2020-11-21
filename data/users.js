const bcryptjs = require('bcryptjs')

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcryptjs.hashSync('abc123', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcryptjs.hashSync('abc123', 10),
  },
  {
    name: 'Jane Doe',
    email: 'Jane@example.com',
    password: bcryptjs.hashSync('abc123', 10),
  },
]

module.exports = users
