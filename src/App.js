import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const options = [
    { id: 1, title: 'modal', description: 'This is sample of modal option. You can see this option to click the button under this card.', url: 'https://fkatsuhiro.github.io/modal-option/' },
    { id: 2, title: 'progress bar', description: 'This is sample of progress bar option. You can see this option to click the button under this card.', url: 'https://fkatsuhiro.github.io/progress-bar-option/' },
    { id: 3, title: 'popover', description: 'This is sample of popver option. You can see this option to click the button under this card.', url: 'https://fkatsuhiro.github.io/popover-option/' },
    { id: 4, title: 'alert', description: 'This is sample of alert option. You can see this option to click the button under this card.', url: 'https://fkatsuhiro.github.io/alert-option/' },
    { id: 5, title: 'toast', description: 'This is sample of toast option. You can see this option to click the button under this card.', url: 'https://fkatsuhiro.github.io/toast-option/' },
    //{ id: 6, title: 'search', description: 'This is sample of search option. You can see this option to click the button under this card.', url: '' },
  ];

  return (
    <div className='row mt-5' style={{ width: '80%', margin: '0 auto' }}>
      {options.map((option) => {
        return (
          <div className='col-md-3 mt-3' key={option.id} >
            <Card style={{ width: '90%', margin: '0 auto' }}>
              <Card.Body>
                <Card.Title>{option.title}</Card.Title>
                <Card.Text>{option.description}</Card.Text>
                <Button as='a' href={option.url} variant="primary">Go {option.title} option </Button>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  );
}

export default App;
