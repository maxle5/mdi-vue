
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneNfcOff from "../../src/components/MdiCellphoneNfcOff.vue";

test("MdiCellphoneNfcOff snapshot", () => {
  const wrapper = mount(MdiCellphoneNfcOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
