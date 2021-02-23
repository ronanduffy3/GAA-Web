import { Component, OnInit } from '@angular/core';
import { FixturesService } from '../../shared/services/fixtures.service';
import { Fixture } from '../../shared/services/fixture';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  Fixtures: Fixture[];

  constructor(private fixturesService: FixturesService) { }

  ngOnInit(): void {
    this.fixturesService.getFixtures().valueChanges().subscribe(fixturesList => {
      console.log(fixturesList);
      this.Fixtures = fixturesList;
    });
  }

}
