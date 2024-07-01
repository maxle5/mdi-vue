
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerSettings from "../../src/components/MdiTimerSettings.vue";

test("MdiTimerSettings snapshot", () => {
  const wrapper = mount(MdiTimerSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
