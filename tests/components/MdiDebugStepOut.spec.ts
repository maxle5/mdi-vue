
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDebugStepOut from "../../src/components/MdiDebugStepOut.vue";

test("MdiDebugStepOut snapshot", () => {
  const wrapper = mount(MdiDebugStepOut, {});
  expect(wrapper.html()).toMatchSnapshot();
});
