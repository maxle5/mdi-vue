
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronRightBoxOutline from "../../src/components/MdiChevronRightBoxOutline.vue";

test("MdiChevronRightBoxOutline snapshot", () => {
  const wrapper = mount(MdiChevronRightBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
