
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarThreePoints from "../../src/components/MdiStarThreePoints.vue";

test("MdiStarThreePoints snapshot", () => {
  const wrapper = mount(MdiStarThreePoints, {});
  expect(wrapper.html()).toMatchSnapshot();
});
