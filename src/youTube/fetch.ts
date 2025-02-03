// const url = 'https://www.scourse-api.com/react-tours-project';

// async function fetchData(url: string) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     const errMsg = error instanceof Error ? error.message : 'An error occurred';
//     console.error(errMsg);
//     return [];
//   }
// }

// const tours = await fetchData(url);
// console.table(tours);

// ! --------------------------CHALLENGE----------------------------

import { z } from 'zod';

const url_2 = 'https://www.course-api.com/react-tours-project';
const tourSchema = z.object({
  id: z.string(),
  image: z.string(),
  info: z.string(),
  name: z.string(),
  price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;

async function fetchTours(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    return result.data;
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : 'An error occurred';
    console.log(errMsg);
    return [];
  }
}

const toursData = await fetchTours(url_2);
// console.table(toursData);
