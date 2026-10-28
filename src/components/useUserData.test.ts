import {act, renderHook} from "@testing-library/react";
import {useUserData} from "./useUserData";


describe("UseUserData", () => {

    it('should return default values', () => {

        const {result} = renderHook(() => useUserData());
        expect(result.current.email).toEqual("hola@hola.com");
        expect(result.current.password).toEqual("password");
    });

    it('should set values correctly', () => {

        const {result} = renderHook(() => useUserData());

        act(() => {
            result.current.setUser('a', 'b');
        })

        expect(result.current.email).toEqual("a");
        expect(result.current.password).toEqual("b");

    })
})