
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveArrowDownOutline from "../../src/components/MdiArchiveArrowDownOutline.vue";

test("MdiArchiveArrowDownOutline snapshot", () => {
  const wrapper = mount(MdiArchiveArrowDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
