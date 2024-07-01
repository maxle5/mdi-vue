
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneMessageOff from "../../src/components/MdiCellphoneMessageOff.vue";

test("MdiCellphoneMessageOff snapshot", () => {
  const wrapper = mount(MdiCellphoneMessageOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
