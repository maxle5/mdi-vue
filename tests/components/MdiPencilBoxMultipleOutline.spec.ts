
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilBoxMultipleOutline from "../../src/components/MdiPencilBoxMultipleOutline.vue";

test("MdiPencilBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiPencilBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
