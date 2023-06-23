// const url = activeModal.sprites.front_default;
// const pokeNumber = activeModal.id;
// const name = activeModal.name;
// const types = activeModal.types.map((type) => type.type.name);
// const weight = (activeModal.weight / 10).toFixed(1);
// const height = (activeModal.height / 10).toFixed(1);

import { render, screen } from "@testing-library/react"
import Modal from "../components/Modal"
import userEvent from "@testing-library/user-event"

const activeModalMock = {
    sprites: {
        front_default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Farchives.bulbagarden.net%2Fmedia%2Fupload%2Ff%2Ffb%2F0001Bulbasaur.png&tbnid=oo2At9IpjNF9wM&vet=12ahUKEwiwsaDe_9f_AhWMELkGHffoAEsQMygBegUIARDnAQ..i&imgrefurl=https%3A%2F%2Fbulbapedia.bulbagarden.net%2Fwiki%2FBulbasaur_(Pok%25C3%25A9mon)&docid=1bs-SGcjMx6-zM&w=774&h=774&itg=1&q=bulbasaur&ved=2ahUKEwiwsaDe_9f_AhWMELkGHffoAEsQMygBegUIARDnAQ"
    }, 
    id: "10",
    name: "Bulbasaur",
    types: [
        {
            type: {
                name: "grama"
            }
        }
    ],
    weight: 5,
    height: 3
}

const closeModalMock = jest.fn()

describe("Modal", () => {
    test("Garantir a renderização dos elementos do Modal", () =>{
        render(<Modal activeModal={activeModalMock} />)
    })

    test("ao clicar no botão fechar", async () => {
        const user = userEvent.setup()
        render(<Modal activeModal={activeModalMock} 
        closeModal={closeModalMock}
        />)
        const button = screen.getByRole("button", {name: /❌/i})
        await user.click(button)

        expect(closeModalMock).toBeCalled()
    })
})