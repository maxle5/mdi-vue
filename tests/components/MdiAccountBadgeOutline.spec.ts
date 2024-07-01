
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountBadgeOutline from "../../src/components/MdiAccountBadgeOutline.vue";

test("MdiAccountBadgeOutline snapshot", () => {
  const wrapper = mount(MdiAccountBadgeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
