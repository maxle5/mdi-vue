
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageBadgeOutline from "../../src/components/MdiMessageBadgeOutline.vue";

test("MdiMessageBadgeOutline snapshot", () => {
  const wrapper = mount(MdiMessageBadgeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
