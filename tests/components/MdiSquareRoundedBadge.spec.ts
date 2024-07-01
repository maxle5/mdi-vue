
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareRoundedBadge from "../../src/components/MdiSquareRoundedBadge.vue";

test("MdiSquareRoundedBadge snapshot", () => {
  const wrapper = mount(MdiSquareRoundedBadge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
