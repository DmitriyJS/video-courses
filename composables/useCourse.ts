import courseData from "./courseData";

type Lesson = {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  videoId: number;
  text: string;
  sourseUrl?: string;
  path: string;
};

type Chapter = {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[];
};

interface Course {
  title: string;
  chapters: Chapter[];
}

export const useCourse = (): Course => {
  // return {
  //   ...courseData,
  //   chapters: courseData.chapters.map((chapter) => ({
  //     ...chapter,
  //     lessons: chapter.lessons.map((lesson) => ({
  //       ...lesson,
  //       path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
  //     })),
  //   })),
  // };
  const chapters: Chapter[] = courseData.chapters.map((chapter) => {
    const lessons: Lesson[] = chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    }));
    return {
      ...chapter,
      lessons,
    };
  });
  return {
    ...courseData,
    chapters,
  };
};
