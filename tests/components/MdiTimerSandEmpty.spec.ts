
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerSandEmpty from "../../src/components/MdiTimerSandEmpty.vue";

test("MdiTimerSandEmpty snapshot", () => {
  const wrapper = mount(MdiTimerSandEmpty, {});
  expect(wrapper.html()).toMatchSnapshot();
});
