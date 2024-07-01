
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarFourPointsCircleOutline from "../../src/components/MdiStarFourPointsCircleOutline.vue";

test("MdiStarFourPointsCircleOutline snapshot", () => {
  const wrapper = mount(MdiStarFourPointsCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
