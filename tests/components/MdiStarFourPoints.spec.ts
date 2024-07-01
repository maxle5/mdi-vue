
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarFourPoints from "../../src/components/MdiStarFourPoints.vue";

test("MdiStarFourPoints snapshot", () => {
  const wrapper = mount(MdiStarFourPoints, {});
  expect(wrapper.html()).toMatchSnapshot();
});
