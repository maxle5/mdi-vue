
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerSandComplete from "../../src/components/MdiTimerSandComplete.vue";

test("MdiTimerSandComplete snapshot", () => {
  const wrapper = mount(MdiTimerSandComplete, {});
  expect(wrapper.html()).toMatchSnapshot();
});
