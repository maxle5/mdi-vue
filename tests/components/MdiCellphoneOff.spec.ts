
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneOff from "../../src/components/MdiCellphoneOff.vue";

test("MdiCellphoneOff snapshot", () => {
  const wrapper = mount(MdiCellphoneOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
