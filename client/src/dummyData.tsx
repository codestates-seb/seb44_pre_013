const dummyData: dummyData[] = [];

interface dummyData {
  userId: number;
  userName: string;
  title: string;
  votes: number;
  answers: number;
  content: string;
  views: number;
  tag: string;
}

for (let i = 1; i <= 120; i++) {
  const data = {
    userId: i,
    userName: `User ${i}`,
    title: `How to Use Node.js`,
    votes: Math.floor(Math.random() * 20),
    answers: Math.floor(Math.random() * 5),
    content:
      'I have a div container with a responsive width and height when I start minimizing the page.It also has a min-width. I want add a floating action button that is 24px from the',
    views: Math.floor(Math.random() * 1000),
    tag: 'typescript',
  };

  dummyData.push(data);
}

export default dummyData;
