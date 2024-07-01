
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxOutline from "../../src/components/MdiTextBoxOutline.vue";

test("MdiTextBoxOutline snapshot", () => {
  const wrapper = mount(MdiTextBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
