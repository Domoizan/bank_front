import {  render, screen } from "@testing-library/react";
import Menu from "./index";




describe("When menu is created", () => {
    
    it("a list menu is displayed", async () => {
        const data =
    [
    {
        lnk:"/",
        txt:"lien 1",
        icone:"fa fa-user-circle",
    },
    {
        lnk:"/",
        txt:"lien 2",
        icone:"fa fa-user-circle",
    }
    ]
      render(
          <Menu lnks={data}/>
      );
      await screen.findByText("lien 1");
      await screen.findByText("lien 2");
     
    });
  });




