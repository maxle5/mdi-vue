
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignalOff from "../../src/components/MdiSignalOff.vue";

test("MdiSignalOff snapshot", () => {
  const wrapper = mount(MdiSignalOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
