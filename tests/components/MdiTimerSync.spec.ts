
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerSync from "../../src/components/MdiTimerSync.vue";

test("MdiTimerSync snapshot", () => {
  const wrapper = mount(MdiTimerSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
