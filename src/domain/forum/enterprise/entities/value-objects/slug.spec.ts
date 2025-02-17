import { Slug } from './slug'

test('Slug', () => {
  const text = 'An example title'

  const slug = Slug.createFromText(text)

  expect(slug.value).toEqual('an-example-title')
})
