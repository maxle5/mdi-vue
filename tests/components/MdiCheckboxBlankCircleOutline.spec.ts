
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxBlankCircleOutline from "../../src/components/MdiCheckboxBlankCircleOutline.vue";

test("MdiCheckboxBlankCircleOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxBlankCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
