export default function () {
  const { chapters } = useCourse();
  return chapters[0].lessons[0];
}
