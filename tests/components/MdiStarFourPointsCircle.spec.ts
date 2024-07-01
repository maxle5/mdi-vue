
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarFourPointsCircle from "../../src/components/MdiStarFourPointsCircle.vue";

test("MdiStarFourPointsCircle snapshot", () => {
  const wrapper = mount(MdiStarFourPointsCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
