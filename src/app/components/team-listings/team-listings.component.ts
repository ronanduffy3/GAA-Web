import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../../shared/services/team-service.service'
import { Team } from '../../shared/services/team';

@Component({
  selector: 'app-team-listings',
  templateUrl: './team-listings.component.html',
  styleUrls: ['./team-listings.component.css']
})
export class TeamListingsComponent implements OnInit {

  teams: any[];

  constructor(private ts: TeamServiceService) { }

  ngOnInit(): void {
    this.ts.getArticle().subscribe(teamsList => {
      this.teams = teamsList;
      console.log(this.teams)
    })
  }

}
