
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxCheckOutline from "../../src/components/MdiTextBoxCheckOutline.vue";

test("MdiTextBoxCheckOutline snapshot", () => {
  const wrapper = mount(MdiTextBoxCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
