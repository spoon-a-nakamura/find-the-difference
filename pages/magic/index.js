import Mission from '../../components/Mission'

const courseValues = {
  categoryName: 'まほう',
  categoryNumber: '02',
  href: 'magic/1',
}

export default function CourseMagics() {
  return (
    <>
      <Mission
        categoryName={courseValues.categoryName}
        categoryNumber={courseValues.categoryNumber}
        href={courseValues.href}
      />
    </>
  )
}
