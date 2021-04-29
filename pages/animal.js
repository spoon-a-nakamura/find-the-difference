import Mission from '../components/Mission'

const courseValues = {
  categoryName: 'どうぶつ',
  stageNumber: '01',
  correctNumber: '4',
}

export default function CourseAnimals() {
  return (
    <>
      <Mission
        categoryName={courseValues.categoryName}
        stageNumber={courseValues.stageNumber}
        correctNumber={courseValues.correctNumber}
      />
    </>
  )
}
