
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountBadge from "../../src/components/MdiAccountBadge.vue";

test("MdiAccountBadge snapshot", () => {
  const wrapper = mount(MdiAccountBadge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
