
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarMinusOutline from "../../src/components/MdiStarMinusOutline.vue";

test("MdiStarMinusOutline snapshot", () => {
  const wrapper = mount(MdiStarMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
