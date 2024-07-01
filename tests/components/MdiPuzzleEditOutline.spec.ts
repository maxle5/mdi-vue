
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleEditOutline from "../../src/components/MdiPuzzleEditOutline.vue";

test("MdiPuzzleEditOutline snapshot", () => {
  const wrapper = mount(MdiPuzzleEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
