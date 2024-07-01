
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxBlankCircle from "../../src/components/MdiCheckboxBlankCircle.vue";

test("MdiCheckboxBlankCircle snapshot", () => {
  const wrapper = mount(MdiCheckboxBlankCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
