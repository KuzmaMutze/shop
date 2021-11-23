import type { NextPage } from 'next';
import { useState } from 'react';
import { Button } from '../components/Button/Button';
import { HTag } from '../components/HTag/HTag';
import { P } from '../components/P/P';
import { Rating } from '../components/Rating/Rating';
import { Tag } from '../components/Tag/Tag';
import { withLayout } from '../layout/Layout';

const Home: NextPage = () => {
  const [rating, setRating] = useState(4);

  return (
    <>
      <HTag tag="h1">Title</HTag>
      <Button arrow="right" onCLick={() => ''} appearance="primary">
        Кнопка
      </Button>
      <Button arrow="right" onCLick={() => ''} appearance="ghost">
        Кнопка
      </Button>
      <P size="xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo blanditiis libero voluptatem,
        corporis ea velit illo minus tenetur aut quaerat ducimus optio debitis temporibus excepturi
        qui aperiam natus. Temporibus, animi.
      </P>
      <Tag href="google.ru">Ghost</Tag>
      <Tag color="red" href="google.ru">
        Red
      </Tag>
      <Tag color="green" href="google.ru">
        Green
      </Tag>
      <Tag size="xl" color="gray" href="google.ru">
        Gray
      </Tag>
      <Tag size="xl" color="primary" href="google.ru">
        Primary
      </Tag>
      <Rating rating={rating} setRating={setRating} />
    </>
  );
};

export default withLayout(Home);
