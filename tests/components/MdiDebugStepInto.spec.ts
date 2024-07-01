
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDebugStepInto from "../../src/components/MdiDebugStepInto.vue";

test("MdiDebugStepInto snapshot", () => {
  const wrapper = mount(MdiDebugStepInto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
