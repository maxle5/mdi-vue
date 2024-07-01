
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxBlankBadge from "../../src/components/MdiCheckboxBlankBadge.vue";

test("MdiCheckboxBlankBadge snapshot", () => {
  const wrapper = mount(MdiCheckboxBlankBadge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
