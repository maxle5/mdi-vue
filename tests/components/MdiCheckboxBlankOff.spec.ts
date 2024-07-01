
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxBlankOff from "../../src/components/MdiCheckboxBlankOff.vue";

test("MdiCheckboxBlankOff snapshot", () => {
  const wrapper = mount(MdiCheckboxBlankOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
