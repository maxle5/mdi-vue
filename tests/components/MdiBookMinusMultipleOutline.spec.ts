
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookMinusMultipleOutline from "../../src/components/MdiBookMinusMultipleOutline.vue";

test("MdiBookMinusMultipleOutline snapshot", () => {
  const wrapper = mount(MdiBookMinusMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
