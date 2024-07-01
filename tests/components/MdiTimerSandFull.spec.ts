
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerSandFull from "../../src/components/MdiTimerSandFull.vue";

test("MdiTimerSandFull snapshot", () => {
  const wrapper = mount(MdiTimerSandFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
