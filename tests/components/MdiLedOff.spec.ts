
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLedOff from "../../src/components/MdiLedOff.vue";

test("MdiLedOff snapshot", () => {
  const wrapper = mount(MdiLedOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
