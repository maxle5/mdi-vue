
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleMinus from "../../src/components/MdiPuzzleMinus.vue";

test("MdiPuzzleMinus snapshot", () => {
  const wrapper = mount(MdiPuzzleMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
