import Mission from '../../components/Mission'

const courseValues = {
  categoryName: 'どうぶつ',
  categoryNumber: '01',
  href: 'animal/1',
}

export default function CourseAnimals() {
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
