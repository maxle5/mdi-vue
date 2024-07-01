
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneBasic from "../../src/components/MdiCellphoneBasic.vue";

test("MdiCellphoneBasic snapshot", () => {
  const wrapper = mount(MdiCellphoneBasic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
