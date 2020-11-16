import React from 'react';
import { render } from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import { MemoryRouter } from 'react-router-dom';
import { shortenText } from '../utils/functions';
import { posts } from './__data__/testData';

//Create two variables at the top; longPost and post. These will be used in various tests in the file
const longPost = posts[0];
const post = posts[1];

//Create a test that will render the PostWidget and check if the inner text content contains the passed in posts text content
//You will need to destructure and pass the post data through to PostWidget
//You will need to wrap PostWidget in a MemoryRouter component
test('Renders out a Post', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...post} />
    </MemoryRouter>,
  );
  expect(container.textContent).toContain(post.text);
});

//Create a test that will check if PostWidget shortens text when passed a post with text longer than 100 characters
//pass longPost through
//Call the function shortenText to get a shortened version of longPost's text
test('Shortens display text when expanded is false', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...longPost} />
    </MemoryRouter>,
  );
  expect(container.textContent).toContain(shortenText(longPost.text));
});

//Create a test that will check if PostWidget displays all text when passed an expanded prop
//pass longPost through
//expanded must be set to true
test('Displays all text when expanded is true', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget expanded={true} {...longPost} />
    </MemoryRouter>,
  );

  expect(container.textContent).toContain(longPost.text);
});