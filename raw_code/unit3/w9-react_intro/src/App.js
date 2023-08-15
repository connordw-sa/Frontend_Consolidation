import './App.css';
import ButtonComponent from './homework/day1';
import ImageComponent from './homework/day1q2';
import MyNav from './homework/day2nav';
import MyFooter from './day2footer';
import Welcome from './homework/day2jumbotron';
import LatestRelease from './homework/day2latestrelease';
import { WarningSign, MyBadge, BookList } from './homework/day3components';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="d-flex flex-column">
      #<h1>Day 1</h1>
      <ButtonComponent label="Whatup" />
      <ImageComponent
        src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="kitten"
      />
      <h1 className="my-5">Day2</h1>
      <MyNav />
      <Welcome />
      <LatestRelease />
      <MyFooter />
      <h1 className="my-5">Day3</h1>
      <WarningSign text="This is a warning sign" />
      <MyBadge text="This is a badge" color="primary" />
      <BookList />
    </div>
  );
}

export default App;
