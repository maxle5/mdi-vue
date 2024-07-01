
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockStarFourPoints from "../../src/components/MdiClockStarFourPoints.vue";

test("MdiClockStarFourPoints snapshot", () => {
  const wrapper = mount(MdiClockStarFourPoints, {});
  expect(wrapper.html()).toMatchSnapshot();
});
