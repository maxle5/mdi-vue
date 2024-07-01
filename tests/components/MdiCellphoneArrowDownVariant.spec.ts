
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneArrowDownVariant from "../../src/components/MdiCellphoneArrowDownVariant.vue";

test("MdiCellphoneArrowDownVariant snapshot", () => {
  const wrapper = mount(MdiCellphoneArrowDownVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
