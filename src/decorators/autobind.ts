// Autobind decorator
const autobind = (
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
) => {
  // get original method autobind decorator attaches to
  const originalMethod = descriptor.value
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    }
  }
  return adjustedDescriptor
}

export default autobind
