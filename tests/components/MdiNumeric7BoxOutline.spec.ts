
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric7BoxOutline from "../../src/components/MdiNumeric7BoxOutline.vue";

test("MdiNumeric7BoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric7BoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
