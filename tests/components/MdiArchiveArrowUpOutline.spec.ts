
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveArrowUpOutline from "../../src/components/MdiArchiveArrowUpOutline.vue";

test("MdiArchiveArrowUpOutline snapshot", () => {
  const wrapper = mount(MdiArchiveArrowUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
