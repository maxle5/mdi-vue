
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarHeartOutline from "../../src/components/MdiCalendarHeartOutline.vue";

test("MdiCalendarHeartOutline snapshot", () => {
  const wrapper = mount(MdiCalendarHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
