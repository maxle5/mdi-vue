
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleStarOutline from "../../src/components/MdiPuzzleStarOutline.vue";

test("MdiPuzzleStarOutline snapshot", () => {
  const wrapper = mount(MdiPuzzleStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
