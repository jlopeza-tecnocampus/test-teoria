import {render, screen} from '@testing-library/react'
import {About} from "./About";
import {userEvent} from "@testing-library/user-event";
import * as userDataModule from "./useUserData";

describe('About Component', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('renders without crashing', () => {
        // default state using values from useUserDate
        render(<About/>);

        expect(screen.getByText("About")).toBeTruthy();
        expect(screen.getByLabelText("password content").textContent).toEqual("password");
        expect(screen.getByLabelText("email content").textContent).toEqual("hola@hola.com");
    })


    it('shoudl clean input when clicking button', async () => {


        render(<About/>);

        await userEvent.click(screen.getByLabelText('clean'));

        screen.logTestingPlaygroundURL();

        expect(screen.getByPlaceholderText("password").textContent).toEqual("");
        expect(screen.getByPlaceholderText("email").textContent).toEqual("");
    })
    it('does not show the password when the form is not submitted', async () => {

        // checking render  using state from  useUserDate
        render(<About/>);

        const passwordInput = screen.getByPlaceholderText('password')

        await userEvent.clear(passwordInput)
        await userEvent.type(passwordInput, 'another')

        expect(screen.getByLabelText("password content").textContent).not.toEqual('another');

        await userEvent.click(screen.getByLabelText('submit form'));


        const passwordElement = screen.getByLabelText("password content");
        expect(passwordElement.textContent).toEqual('another');
    });

    it('does call setUser when a form is submitted', async () => {
        // check setUser is called as expected;
        const setUser = jest.fn();
        jest.spyOn(userDataModule, 'useUserData').mockReturnValue({
            email: 'h',
            password: 'pass',
            setUser
        });
        render(<About/>);

        const passwordInput = screen.getByPlaceholderText('password')

        await userEvent.clear(passwordInput)
        await userEvent.type(passwordInput, 'another');
        await userEvent.click(screen.getByLabelText('submit form'));

        expect(setUser).toHaveBeenCalledWith('h', 'another');
        expect(setUser).toHaveBeenCalledTimes(1);
    });

    it('ensure email and password comes from useData, ', () => {
        jest.spyOn(userDataModule, 'useUserData').mockReturnValue({
            email: 'h',
            password: 'pass',
            setUser: jest.fn()
        });

        render(<About/>);

        expect(screen.getByLabelText("password content").textContent).toEqual("pass");
        expect(screen.getByLabelText("email content").textContent).toEqual("h");
    });
})
