
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarStarFourPoints from "../../src/components/MdiCalendarStarFourPoints.vue";

test("MdiCalendarStarFourPoints snapshot", () => {
  const wrapper = mount(MdiCalendarStarFourPoints, {});
  expect(wrapper.html()).toMatchSnapshot();
});
