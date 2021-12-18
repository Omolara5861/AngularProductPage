import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";


@Component({
    selector: '<pm-star></pm-star>',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number = 0;
    cropWidth = 75;

    @Output() ratingClicked = new EventEmitter<string>();

    onClick():void {
        this.ratingClicked.emit(`This product has the rating of ${this.rating} stars`);
    }

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
}