
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarLock from "../../src/components/MdiCalendarLock.vue";

test("MdiCalendarLock snapshot", () => {
  const wrapper = mount(MdiCalendarLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
