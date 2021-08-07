import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state={
    posts: [
        { id: 1, message: "Post number one", likesCount: 3 },
        { id: 2, message: "Number two", likesCount: 23 },
      ],
    }

test('Should be added new post', () => {
    let action = addPostCreator ("It-kam")

    let state={
        posts: [
            { id: 1, message: "Post number one", likesCount: 3 },
            { id: 2, message: "Number two", likesCount: 23 },
          ],
        }

    let newState = profileReducer (state,action)


    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe("It-kam");
  });

test('Should be added new post', () => {
    let action = addPostCreator ("It-kam")



    let newState = profileReducer (state,action)



    expect(newState.posts[2].message).toBe("It-kam");
  });

test('Lenght after deleting should', () => {
    let action = deletePost(1);



    let newState = profileReducer (state,action)



    expect(newState.posts.length).toBe(1);
  });
