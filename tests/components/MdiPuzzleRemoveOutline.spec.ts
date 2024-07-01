
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleRemoveOutline from "../../src/components/MdiPuzzleRemoveOutline.vue";

test("MdiPuzzleRemoveOutline snapshot", () => {
  const wrapper = mount(MdiPuzzleRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
