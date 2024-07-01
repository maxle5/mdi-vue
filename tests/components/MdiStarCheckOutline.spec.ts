
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarCheckOutline from "../../src/components/MdiStarCheckOutline.vue";

test("MdiStarCheckOutline snapshot", () => {
  const wrapper = mount(MdiStarCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
