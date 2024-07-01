
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzlePlusOutline from "../../src/components/MdiPuzzlePlusOutline.vue";

test("MdiPuzzlePlusOutline snapshot", () => {
  const wrapper = mount(MdiPuzzlePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
