import type { PaginatedDocs } from 'payload/database'
import type { SanitizedCollectionConfig } from 'payload/types'

import type { CompareOption } from '../Default/types.js'

export type Props = {
  baseURL: string
  latestDraftVersion?: string
  latestPublishedVersion?: string
  onChange: (val: CompareOption) => void
  parentID?: number | string
  value: CompareOption
  versionID: string
}

type CLEAR = {
  required: boolean
  type: 'CLEAR'
}

type ADD = {
  collection: SanitizedCollectionConfig
  data: PaginatedDocs<any>
  type: 'ADD'
}

export type Action = ADD | CLEAR

export type ValueWithRelation = {
  relationTo: string
  value: string
}
