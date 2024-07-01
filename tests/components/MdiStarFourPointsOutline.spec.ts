
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarFourPointsOutline from "../../src/components/MdiStarFourPointsOutline.vue";

test("MdiStarFourPointsOutline snapshot", () => {
  const wrapper = mount(MdiStarFourPointsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
