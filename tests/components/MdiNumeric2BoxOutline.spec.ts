
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric2BoxOutline from "../../src/components/MdiNumeric2BoxOutline.vue";

test("MdiNumeric2BoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric2BoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
