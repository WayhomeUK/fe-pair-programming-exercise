import "@testing-library/jest-dom/extend-expect";
import { server } from "mocks/server";
import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
