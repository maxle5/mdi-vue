
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxBlankOutline from "../../src/components/MdiCheckboxBlankOutline.vue";

test("MdiCheckboxBlankOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxBlankOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
