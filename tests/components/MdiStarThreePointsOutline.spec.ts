
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarThreePointsOutline from "../../src/components/MdiStarThreePointsOutline.vue";

test("MdiStarThreePointsOutline snapshot", () => {
  const wrapper = mount(MdiStarThreePointsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
