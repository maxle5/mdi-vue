
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrowaveOff from "../../src/components/MdiMicrowaveOff.vue";

test("MdiMicrowaveOff snapshot", () => {
  const wrapper = mount(MdiMicrowaveOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
