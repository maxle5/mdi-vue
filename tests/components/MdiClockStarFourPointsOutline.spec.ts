
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockStarFourPointsOutline from "../../src/components/MdiClockStarFourPointsOutline.vue";

test("MdiClockStarFourPointsOutline snapshot", () => {
  const wrapper = mount(MdiClockStarFourPointsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
