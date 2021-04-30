import Mission from '../components/Mission'

const courseValues = {
  categoryName: 'どうぶつ',
  stageNumber: '1',
  correctNumber: '4',
  href: 'animal/1',
}

export default function CourseAnimals() {
  return (
    <>
      <Mission
        categoryName={courseValues.categoryName}
        stageNumber={courseValues.stageNumber}
        correctNumber={courseValues.correctNumber}
        href={courseValues.href}
      />
    </>
  )
}
