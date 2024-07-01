
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric6CircleOutline from "../../src/components/MdiNumeric6CircleOutline.vue";

test("MdiNumeric6CircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric6CircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
