/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    players {
      items {
        id
        game {
          id
          players {
            items {
              id
              createdAt
            }
            nextToken
          }
          creator {
            id
            username
          }
          opponent {
            id
            username
          }
          creatorOrientation
          time
          variant
          fen
          available
          ended
          history
          result
          winner
          createdAt
          messages {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        createdAt
        player {
          id
          username
          email
          phoneNumber
          pastGames {
            items {
              id
              createdAt
            }
            nextToken
          }
          points
          skillLevel
          rank
          createdAt
          variants {
            items {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
      }
      nextToken
    }
    creator {
      id
      username
    }
    opponent {
      id
      username
    }
    creatorOrientation
    time
    variant
    fen
    available
    ended
    history
    result
    winner
    createdAt
    messages {
      items {
        id
        author {
          id
          username
        }
        content
        game {
          id
          players {
            items {
              id
              createdAt
            }
            nextToken
          }
          creator {
            id
            username
          }
          opponent {
            id
            username
          }
          creatorOrientation
          time
          variant
          fen
          available
          ended
          history
          result
          winner
          createdAt
          messages {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        createdAt
      }
      nextToken
    }
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      players {
        items {
          id
          game {
            id
            players {
              nextToken
            }
            creator {
              id
              username
            }
            opponent {
              id
              username
            }
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
            messages {
              nextToken
            }
          }
          createdAt
          player {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
      creator {
        id
        username
      }
      opponent {
        id
        username
      }
      creatorOrientation
      time
      variant
      fen
      available
      ended
      history
      result
      winner
      createdAt
      messages {
        items {
          id
          author {
            id
            username
          }
          content
          game {
            id
            players {
              nextToken
            }
            creator {
              id
              username
            }
            opponent {
              id
              username
            }
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
            messages {
              nextToken
            }
          }
          createdAt
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    author {
      id
      username
    }
    content
    game {
      id
      players {
        items {
          id
          game {
            id
            players {
              nextToken
            }
            creator {
              id
              username
            }
            opponent {
              id
              username
            }
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
            messages {
              nextToken
            }
          }
          createdAt
          player {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
      creator {
        id
        username
      }
      opponent {
        id
        username
      }
      creatorOrientation
      time
      variant
      fen
      available
      ended
      history
      result
      winner
      createdAt
      messages {
        items {
          id
          author {
            id
            username
          }
          content
          game {
            id
            players {
              nextToken
            }
            creator {
              id
              username
            }
            opponent {
              id
              username
            }
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
            messages {
              nextToken
            }
          }
          createdAt
        }
        nextToken
      }
    }
    createdAt
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      author {
        id
        username
      }
      content
      game {
        id
        players {
          items {
            id
            game {
              id
              creatorOrientation
              time
              variant
              fen
              available
              ended
              history
              result
              winner
              createdAt
            }
            createdAt
            player {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
          }
          nextToken
        }
        creator {
          id
          username
        }
        opponent {
          id
          username
        }
        creatorOrientation
        time
        variant
        fen
        available
        ended
        history
        result
        winner
        createdAt
        messages {
          items {
            id
            author {
              id
              username
            }
            content
            game {
              id
              creatorOrientation
              time
              variant
              fen
              available
              ended
              history
              result
              winner
              createdAt
            }
            createdAt
          }
          nextToken
        }
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    author {
      id
      username
    }
    title
    content
    createdAt
    likes {
      items {
        id
        post {
          id
          author {
            id
            username
          }
          title
          content
          createdAt
          likes {
            items {
              id
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        liker {
          id
          username
        }
      }
      nextToken
    }
    comments {
      items {
        id
        author {
          id
          username
        }
        content
        createdAt
        post {
          id
          author {
            id
            username
          }
          title
          content
          createdAt
          likes {
            items {
              id
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      author {
        id
        username
      }
      title
      content
      createdAt
      likes {
        items {
          id
          liker {
            id
          }
        }
        nextToken
      }
      comments {
        items {
          id
          author {
            id
            username
          }
          content
          createdAt
          post {
            id
            author {
              id
              username
            }
            title
            content
            createdAt
            likes {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPostLike = `query GetPostLike($id: ID!) {
  getPostLike(id: $id) {
    id
    post {
      id
      author {
        id
        username
      }
      title
      content
      createdAt
      likes {
        items {
          id
          post {
            id
            author {
              id
              username
            }
            title
            content
            createdAt
            likes {
              nextToken
            }
            comments {
              nextToken
            }
          }
          liker {
            id
            username
          }
        }
        nextToken
      }
      comments {
        items {
          id
          author {
            id
            username
          }
          content
          createdAt
          post {
            id
            author {
              id
              username
            }
            title
            content
            createdAt
            likes {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    liker {
      id
      username
    }
  }
}
`;
export const listPostLikes = `query ListPostLikes(
  $filter: ModelPostLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      post {
        id
        author {
          id
          username
        }
        title
        content
        createdAt
        likes {
          items {
            id
            post {
              id
              title
              content
              createdAt
            }
            liker {
              id
              username
            }
          }
          nextToken
        }
        comments {
          items {
            id
            author {
              id
              username
            }
            content
            createdAt
            post {
              id
              title
              content
              createdAt
            }
          }
          nextToken
        }
      }
      liker {
        id
        username
      }
    }
    nextToken
  }
}
`;
export const getPostComment = `query GetPostComment($id: ID!) {
  getPostComment(id: $id) {
    id
    author {
      id
      username
    }
    content
    createdAt
    post {
      id
      author {
        id
        username
      }
      title
      content
      createdAt
      likes {
        items {
          id
          post {
            id
            author {
              id
              username
            }
            title
            content
            createdAt
            likes {
              nextToken
            }
            comments {
              nextToken
            }
          }
          liker {
            id
            username
          }
        }
        nextToken
      }
      comments {
        items {
          id
          author {
            id
            username
          }
          content
          createdAt
          post {
            id
            author {
              id
              username
            }
            title
            content
            createdAt
            likes {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
}
`;
export const listPostComments = `query ListPostComments(
  $filter: ModelPostCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      author {
        id
        username
      }
      content
      createdAt
      post {
        id
        author {
          id
          username
        }
        title
        content
        createdAt
        likes {
          items {
            id
            post {
              id
              title
              content
              createdAt
            }
            liker {
              id
              username
            }
          }
          nextToken
        }
        comments {
          items {
            id
            author {
              id
              username
            }
            content
            createdAt
            post {
              id
              title
              content
              createdAt
            }
          }
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
          id
          game {
            id
            players {
              nextToken
            }
            creator {
              id
              username
            }
            opponent {
              id
              username
            }
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
            messages {
              nextToken
            }
          }
          createdAt
          player {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    phoneNumber
    pastGames {
      items {
        id
        game {
          id
          players {
            items {
              id
              createdAt
            }
            nextToken
          }
          creator {
            id
            username
          }
          opponent {
            id
            username
          }
          creatorOrientation
          time
          variant
          fen
          available
          ended
          history
          result
          winner
          createdAt
          messages {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        createdAt
        player {
          id
          username
          email
          phoneNumber
          pastGames {
            items {
              id
              createdAt
            }
            nextToken
          }
          points
          skillLevel
          rank
          createdAt
          variants {
            items {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
      }
      nextToken
    }
    points
    skillLevel
    rank
    createdAt
    variants {
      items {
        id
        name
        baseVariant
        startFen
        customPiece
        submitted
        approved
        createdAt
        creator {
          id
          username
          email
          phoneNumber
          pastGames {
            items {
              id
              createdAt
            }
            nextToken
          }
          points
          skillLevel
          rank
          createdAt
          variants {
            items {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        comments {
          items {
            id
            content
            createdAt
            user {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            variant {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
          }
          nextToken
        }
      }
      nextToken
    }
    comments {
      items {
        id
        content
        createdAt
        user {
          id
          username
          email
          phoneNumber
          pastGames {
            items {
              id
              createdAt
            }
            nextToken
          }
          points
          skillLevel
          rank
          createdAt
          variants {
            items {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        variant {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const getUserByUsername = `query GetUserByUsername(
  $username: String
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  getUserByUsername(
    username: $username
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
          id
          game {
            id
            players {
              nextToken
            }
            creator {
              id
              username
            }
            opponent {
              id
              username
            }
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
            messages {
              nextToken
            }
          }
          createdAt
          player {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComplaint = `query GetComplaint($id: ID!) {
  getComplaint(id: $id) {
    id
    user {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
          id
          game {
            id
            players {
              nextToken
            }
            creator {
              id
              username
            }
            opponent {
              id
              username
            }
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
            messages {
              nextToken
            }
          }
          createdAt
          player {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    reportedUser {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
          id
          game {
            id
            players {
              nextToken
            }
            creator {
              id
              username
            }
            opponent {
              id
              username
            }
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
            messages {
              nextToken
            }
          }
          createdAt
          player {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    gameLink
    content
    processed
    processedBy {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
          id
          game {
            id
            players {
              nextToken
            }
            creator {
              id
              username
            }
            opponent {
              id
              username
            }
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
            messages {
              nextToken
            }
          }
          createdAt
          player {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    result
    createdAt
    updatedAt
  }
}
`;
export const listComplaints = `query ListComplaints(
  $filter: ModelComplaintFilterInput
  $limit: Int
  $nextToken: String
) {
  listComplaints(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        username
        email
        phoneNumber
        pastGames {
          items {
            id
            game {
              id
              creatorOrientation
              time
              variant
              fen
              available
              ended
              history
              result
              winner
              createdAt
            }
            createdAt
            player {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
          }
          nextToken
        }
        points
        skillLevel
        rank
        createdAt
        variants {
          items {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            id
            content
            createdAt
            user {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            variant {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
          }
          nextToken
        }
      }
      reportedUser {
        id
        username
        email
        phoneNumber
        pastGames {
          items {
            id
            game {
              id
              creatorOrientation
              time
              variant
              fen
              available
              ended
              history
              result
              winner
              createdAt
            }
            createdAt
            player {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
          }
          nextToken
        }
        points
        skillLevel
        rank
        createdAt
        variants {
          items {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            id
            content
            createdAt
            user {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            variant {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
          }
          nextToken
        }
      }
      gameLink
      content
      processed
      processedBy {
        id
        username
        email
        phoneNumber
        pastGames {
          items {
            id
            game {
              id
              creatorOrientation
              time
              variant
              fen
              available
              ended
              history
              result
              winner
              createdAt
            }
            createdAt
            player {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
          }
          nextToken
        }
        points
        skillLevel
        rank
        createdAt
        variants {
          items {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            id
            content
            createdAt
            user {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            variant {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
          }
          nextToken
        }
      }
      result
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const listCustomizedVariants = `query ListCustomizedVariants(
  $filter: ModelCustomizedVariantFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomizedVariants(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      baseVariant
      startFen
      customPiece
      submitted
      approved
      createdAt
      creator {
        id
        username
        email
        phoneNumber
        pastGames {
          items {
            id
            game {
              id
              creatorOrientation
              time
              variant
              fen
              available
              ended
              history
              result
              winner
              createdAt
            }
            createdAt
            player {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
          }
          nextToken
        }
        points
        skillLevel
        rank
        createdAt
        variants {
          items {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            id
            content
            createdAt
            user {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            variant {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
          }
          nextToken
        }
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCustomizedVariant = `query GetCustomizedVariant($id: ID!) {
  getCustomizedVariant(id: $id) {
    id
    name
    baseVariant
    startFen
    customPiece
    submitted
    approved
    createdAt
    creator {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
          id
          game {
            id
            players {
              nextToken
            }
            creator {
              id
              username
            }
            opponent {
              id
              username
            }
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
            messages {
              nextToken
            }
          }
          createdAt
          player {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
        user {
          id
          username
          email
          phoneNumber
          pastGames {
            items {
              id
              createdAt
            }
            nextToken
          }
          points
          skillLevel
          rank
          createdAt
          variants {
            items {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        variant {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    createdAt
    user {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
          id
          game {
            id
            players {
              nextToken
            }
            creator {
              id
              username
            }
            opponent {
              id
              username
            }
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
            messages {
              nextToken
            }
          }
          createdAt
          player {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    variant {
      id
      name
      baseVariant
      startFen
      customPiece
      submitted
      approved
      createdAt
      creator {
        id
        username
        email
        phoneNumber
        pastGames {
          items {
            id
            game {
              id
              creatorOrientation
              time
              variant
              fen
              available
              ended
              history
              result
              winner
              createdAt
            }
            createdAt
            player {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
          }
          nextToken
        }
        points
        skillLevel
        rank
        createdAt
        variants {
          items {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            id
            content
            createdAt
            user {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            variant {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
          }
          nextToken
        }
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            pastGames {
              nextToken
            }
            points
            skillLevel
            rank
            createdAt
            variants {
              nextToken
            }
            comments {
              nextToken
            }
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      createdAt
      user {
        id
        username
        email
        phoneNumber
        pastGames {
          items {
            id
            game {
              id
              creatorOrientation
              time
              variant
              fen
              available
              ended
              history
              result
              winner
              createdAt
            }
            createdAt
            player {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
          }
          nextToken
        }
        points
        skillLevel
        rank
        createdAt
        variants {
          items {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
            creator {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            id
            content
            createdAt
            user {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            variant {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
          }
          nextToken
        }
      }
      variant {
        id
        name
        baseVariant
        startFen
        customPiece
        submitted
        approved
        createdAt
        creator {
          id
          username
          email
          phoneNumber
          pastGames {
            items {
              id
              createdAt
            }
            nextToken
          }
          points
          skillLevel
          rank
          createdAt
          variants {
            items {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
            }
            nextToken
          }
        }
        comments {
          items {
            id
            content
            createdAt
            user {
              id
              username
              email
              phoneNumber
              points
              skillLevel
              rank
              createdAt
            }
            variant {
              id
              name
              baseVariant
              startFen
              customPiece
              submitted
              approved
              createdAt
            }
          }
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
