
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9BoxOutline from "../../src/components/MdiNumeric9BoxOutline.vue";

test("MdiNumeric9BoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric9BoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
