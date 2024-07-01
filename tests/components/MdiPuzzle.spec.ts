
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzle from "../../src/components/MdiPuzzle.vue";

test("MdiPuzzle snapshot", () => {
  const wrapper = mount(MdiPuzzle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
