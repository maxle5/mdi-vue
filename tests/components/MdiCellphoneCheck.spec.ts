
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneCheck from "../../src/components/MdiCellphoneCheck.vue";

test("MdiCellphoneCheck snapshot", () => {
  const wrapper = mount(MdiCellphoneCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
