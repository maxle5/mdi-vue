
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAwningOutline from "../../src/components/MdiAwningOutline.vue";

test("MdiAwningOutline snapshot", () => {
  const wrapper = mount(MdiAwningOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
