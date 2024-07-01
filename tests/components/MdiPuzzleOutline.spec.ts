
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleOutline from "../../src/components/MdiPuzzleOutline.vue";

test("MdiPuzzleOutline snapshot", () => {
  const wrapper = mount(MdiPuzzleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
