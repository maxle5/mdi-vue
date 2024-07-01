
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDebugStepOver from "../../src/components/MdiDebugStepOver.vue";

test("MdiDebugStepOver snapshot", () => {
  const wrapper = mount(MdiDebugStepOver, {});
  expect(wrapper.html()).toMatchSnapshot();
});
