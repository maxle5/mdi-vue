
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxBlankOffOutline from "../../src/components/MdiCheckboxBlankOffOutline.vue";

test("MdiCheckboxBlankOffOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxBlankOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
