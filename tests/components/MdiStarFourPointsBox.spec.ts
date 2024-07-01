
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarFourPointsBox from "../../src/components/MdiStarFourPointsBox.vue";

test("MdiStarFourPointsBox snapshot", () => {
  const wrapper = mount(MdiStarFourPointsBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
