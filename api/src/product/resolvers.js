import service from '../service'

export default {
  Query: {
    product(root, args) {
      console.log('args', args)
      const { id } = args

      return service.getProductById(id)
    }
  }
}
