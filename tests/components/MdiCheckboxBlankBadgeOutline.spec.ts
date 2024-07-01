
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxBlankBadgeOutline from "../../src/components/MdiCheckboxBlankBadgeOutline.vue";

test("MdiCheckboxBlankBadgeOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxBlankBadgeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
