interface iContainer {
  children: React.ReactNode
  element?: React.ElementType
  className?: string
}

export const Container = ({
  children,
  element = 'section',
  className = '',
}: iContainer) => {
  const Tag = element
  const styles = `container mx-auto px-2 ${className}`

  return <Tag className={styles}>{children}</Tag>
}
