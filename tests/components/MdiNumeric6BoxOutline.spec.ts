
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric6BoxOutline from "../../src/components/MdiNumeric6BoxOutline.vue";

test("MdiNumeric6BoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric6BoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
