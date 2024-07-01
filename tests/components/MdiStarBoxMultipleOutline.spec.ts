
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarBoxMultipleOutline from "../../src/components/MdiStarBoxMultipleOutline.vue";

test("MdiStarBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiStarBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
