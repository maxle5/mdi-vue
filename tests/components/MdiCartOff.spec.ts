
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartOff from "../../src/components/MdiCartOff.vue";

test("MdiCartOff snapshot", () => {
  const wrapper = mount(MdiCartOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
