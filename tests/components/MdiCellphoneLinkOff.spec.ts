
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneLinkOff from "../../src/components/MdiCellphoneLinkOff.vue";

test("MdiCellphoneLinkOff snapshot", () => {
  const wrapper = mount(MdiCellphoneLinkOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
