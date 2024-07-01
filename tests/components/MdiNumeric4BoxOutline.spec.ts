
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric4BoxOutline from "../../src/components/MdiNumeric4BoxOutline.vue";

test("MdiNumeric4BoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric4BoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
