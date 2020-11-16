import React from 'react';
import { render, act } from '@testing-library/react';
import Post from '../views/Post';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { posts } from './__data__/testData';

//Create a test to check that our Post component actually renders a post
//You will need to use jest's spyOn method to watch for axios get requests and send back an individual post
//use the async version of act to await the axios request/response cycle
//use the .toContain method to check if the inner textContent of our rendered Post matches the posts text that returned as data to the component
test('Renders out a post widget', async () => {
    const post = posts[0];
    let container;
    jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve({ data: post }));
    await act(async () => {
      let renderObj = render(
        <MemoryRouter>
          <Post match={{ params: { postId: 1 } }} />
        </MemoryRouter>,
      );
      container = renderObj.container;
    });
  
    expect(container.textContent).toContain(post.text);
  });
  