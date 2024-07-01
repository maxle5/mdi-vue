
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric0BoxOutline from "../../src/components/MdiNumeric0BoxOutline.vue";

test("MdiNumeric0BoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric0BoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
