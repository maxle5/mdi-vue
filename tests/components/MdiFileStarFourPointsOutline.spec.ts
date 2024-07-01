
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileStarFourPointsOutline from "../../src/components/MdiFileStarFourPointsOutline.vue";

test("MdiFileStarFourPointsOutline snapshot", () => {
  const wrapper = mount(MdiFileStarFourPointsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
