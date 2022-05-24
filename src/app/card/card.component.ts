import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  posts: any;
  getClick() {
    var buttons = document.querySelectorAll('button.eliminar');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i]?.addEventListener('click', function handleClick() {
        buttons[i].closest('.container__card')?.classList.add('hide');
      })
    }
  }

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        console.log(response);
      });

  }
}

