
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableOff from "../../src/components/MdiTableOff.vue";

test("MdiTableOff snapshot", () => {
  const wrapper = mount(MdiTableOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
