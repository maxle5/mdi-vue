
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleMinusOutline from "../../src/components/MdiPuzzleMinusOutline.vue";

test("MdiPuzzleMinusOutline snapshot", () => {
  const wrapper = mount(MdiPuzzleMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
