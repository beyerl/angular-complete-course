import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
    {{ text | summary:10 }}
    `
})
export class CoursesComponent {
    text = "Bavaria ipsum dolor sit amet koa kumm geh de Sonn dahoam sowos Klampfn g’hupft wia gsprunga! Des is hoid aso is ma Wuascht mogsd a Bussal Sauwedda, großherzig i bin a woschechta Bayer Resi sowos nix. Des wiad a Mordsgaudi Almrausch hogg ma uns zamm ned. Edlweiss Heimatland i hab an, gwiss Prosd Breihaus Fingahaggln eam Breihaus! Bitt dringma aweng geh Baamwach, spernzaln a Maß und no a Maß hawadere midananda oans."
}