
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardAccountDetailsStarOutline from "../../src/components/MdiCardAccountDetailsStarOutline.vue";

test("MdiCardAccountDetailsStarOutline snapshot", () => {
  const wrapper = mount(MdiCardAccountDetailsStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
