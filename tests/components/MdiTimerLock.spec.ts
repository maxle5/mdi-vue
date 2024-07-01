
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerLock from "../../src/components/MdiTimerLock.vue";

test("MdiTimerLock snapshot", () => {
  const wrapper = mount(MdiTimerLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
