
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRestartOff from "../../src/components/MdiRestartOff.vue";

test("MdiRestartOff snapshot", () => {
  const wrapper = mount(MdiRestartOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
