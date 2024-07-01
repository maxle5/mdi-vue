
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleRemove from "../../src/components/MdiPuzzleRemove.vue";

test("MdiPuzzleRemove snapshot", () => {
  const wrapper = mount(MdiPuzzleRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
