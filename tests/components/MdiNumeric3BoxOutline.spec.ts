
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric3BoxOutline from "../../src/components/MdiNumeric3BoxOutline.vue";

test("MdiNumeric3BoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric3BoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
