
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxMinusOutline from "../../src/components/MdiTextBoxMinusOutline.vue";

test("MdiTextBoxMinusOutline snapshot", () => {
  const wrapper = mount(MdiTextBoxMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
