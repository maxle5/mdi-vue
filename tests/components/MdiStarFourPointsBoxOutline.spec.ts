
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarFourPointsBoxOutline from "../../src/components/MdiStarFourPointsBoxOutline.vue";

test("MdiStarFourPointsBoxOutline snapshot", () => {
  const wrapper = mount(MdiStarFourPointsBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
