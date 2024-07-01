
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneArrowDown from "../../src/components/MdiCellphoneArrowDown.vue";

test("MdiCellphoneArrowDown snapshot", () => {
  const wrapper = mount(MdiCellphoneArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
