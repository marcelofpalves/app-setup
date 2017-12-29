import service from '../service'

export default {
  Query: {
    product(root, args) {
      const { id } = args

      return service.getProductById(id)
    },

    async productSearch(root, args) {
      const products = await service.getProducts({ filter: {} })
      return {
        totalCount: products.length,
        edges: products.map((node, cursor) => ({
          node,
          cursor
        })),
        pageInfo: {
          endCursor: 'something',
          hasNextPage: false
        }
      }
    }
  }
}
