import FooterComponent from "../components/footer";
import MenuComponent from "../components/menu";
import { Screen } from "../interfaces/screen";
import { useState } from "preact/hooks";
import { faker } from "@faker-js/faker";

interface MainScreenProps extends Screen {}

interface Post {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
}

function MainScreen(props: MainScreenProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const loadPosts = () => {
    for (let index = 0; index < 10; index++) {
      const mockPost = {
        id: index,
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        thumbnail: faker.image.imageUrl(),
      };
      setPosts((posts) => [...posts, mockPost]);
    }
  };
  loadPosts();
  return (
    <div className="application">
      <MenuComponent />
      <div className="content">
        <div className="content-container">
          <h1 className="posts-title">Notícias</h1>
          <div className="card-container">
            {posts?.map((post) => (
              <div className="card" key={post.id}>
                <img className="card-image" src={post.thumbnail} alt="image" />
                <div className="card-title">{post.title}</div>
              </div>
            ))}
          </div>
        </div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default MainScreen;
