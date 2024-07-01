
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioactiveOff from "../../src/components/MdiRadioactiveOff.vue";

test("MdiRadioactiveOff snapshot", () => {
  const wrapper = mount(MdiRadioactiveOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
