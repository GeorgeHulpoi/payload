import { I18n } from '@payloadcms/translations'
import { Description, DescriptionComponent } from 'payload/types'
import React from 'react'

export type Props = {
  className?: string
  description?: Description
  marginPlacement?: 'bottom' | 'top'
  path?: string
  value?: unknown
  i18n: I18n
}

export function isComponent(description: Description): description is DescriptionComponent {
  return React.isValidElement(description)
}