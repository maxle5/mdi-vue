
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleMultipleOutline from "../../src/components/MdiCircleMultipleOutline.vue";

test("MdiCircleMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCircleMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
