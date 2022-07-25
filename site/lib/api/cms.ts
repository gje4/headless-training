import Contentstack, { Config, Region } from 'contentstack'

const contentStackKey = process.env.CONTENTSTACK_API_KEY || ''
const contentStackToken = process.env.CONTENTSTACK_API_TOKEN || ''
const contentStackEnv = process.env.CONTENTSTACK_API_ENV || ''

const config: Config = {
  api_key: contentStackKey,
  delivery_token: contentStackToken,
  environment: contentStackEnv,
  region: Region.US,
}

const Stack = Contentstack.Stack(config)
type CmsContentTypes =  'home_page'

export const getAllEntries = (contentType: CmsContentTypes): any => {
  const Query = Stack.ContentType(contentType).Query()

  return Query.toJSON()
    .find()
    .then(
      function success(result) {
        return result[0]
      },
      function error(err) {
        return err
      }
    )
}

export const getEntriesByKey = (contentType: CmsContentTypes, key: string, id: number): any => {
  const Query = Stack.ContentType(contentType).Query().equalTo(key, id)
  return Query.toJSON()
    .find()
    .then(
      function success(result) {
        return result[0]
      },
      function error(err) {
        return err
      }
    )
}

export const getEntries = (contentType: CmsContentTypes, id: number): any => {
  const Query = Stack.ContentType(contentType).Query().equalTo('uid', id)
  return Query.toJSON()
    .find()
    .then(
      function success(result) {
        return result[0]
      },
      function error(err) {
        return err
      }
    )
}
