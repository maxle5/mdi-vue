
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleCheckOutline from "../../src/components/MdiPuzzleCheckOutline.vue";

test("MdiPuzzleCheckOutline snapshot", () => {
  const wrapper = mount(MdiPuzzleCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
