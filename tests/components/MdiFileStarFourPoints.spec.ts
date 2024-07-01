
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileStarFourPoints from "../../src/components/MdiFileStarFourPoints.vue";

test("MdiFileStarFourPoints snapshot", () => {
  const wrapper = mount(MdiFileStarFourPoints, {});
  expect(wrapper.html()).toMatchSnapshot();
});
