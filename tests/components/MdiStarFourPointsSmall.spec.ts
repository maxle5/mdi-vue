
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarFourPointsSmall from "../../src/components/MdiStarFourPointsSmall.vue";

test("MdiStarFourPointsSmall snapshot", () => {
  const wrapper = mount(MdiStarFourPointsSmall, {});
  expect(wrapper.html()).toMatchSnapshot();
});
