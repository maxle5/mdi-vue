
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarBoxOutline from "../../src/components/MdiStarBoxOutline.vue";

test("MdiStarBoxOutline snapshot", () => {
  const wrapper = mount(MdiStarBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
