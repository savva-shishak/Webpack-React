import React from 'react';

let message = ['autor: metanit.com', 'sate: <a></a>']

const Info = props =>{
  return (
    <div>
      <h2>От куда взят шаблон</h2>
      <ul>
        <li>автор: metanit.com</li>
        <li>сайт: <a target='_blank' href='https://metanit.com/web/react/2.9.php'>здесь</a></li>
      </ul>
    </div>
  )
}
export default Info;
