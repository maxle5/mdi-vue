
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressStarFourPoints from "../../src/components/MdiProgressStarFourPoints.vue";

test("MdiProgressStarFourPoints snapshot", () => {
  const wrapper = mount(MdiProgressStarFourPoints, {});
  expect(wrapper.html()).toMatchSnapshot();
});
