
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareRoundedBadgeOutline from "../../src/components/MdiSquareRoundedBadgeOutline.vue";

test("MdiSquareRoundedBadgeOutline snapshot", () => {
  const wrapper = mount(MdiSquareRoundedBadgeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
