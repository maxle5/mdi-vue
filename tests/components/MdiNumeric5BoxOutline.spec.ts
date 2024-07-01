
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric5BoxOutline from "../../src/components/MdiNumeric5BoxOutline.vue";

test("MdiNumeric5BoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric5BoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
