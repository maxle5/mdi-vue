
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageBadge from "../../src/components/MdiMessageBadge.vue";

test("MdiMessageBadge snapshot", () => {
  const wrapper = mount(MdiMessageBadge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
