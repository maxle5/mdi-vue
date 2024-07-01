
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellBadge from "../../src/components/MdiBellBadge.vue";

test("MdiBellBadge snapshot", () => {
  const wrapper = mount(MdiBellBadge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
