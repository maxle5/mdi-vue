
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarWeekBeginOutline from "../../src/components/MdiCalendarWeekBeginOutline.vue";

test("MdiCalendarWeekBeginOutline snapshot", () => {
  const wrapper = mount(MdiCalendarWeekBeginOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
