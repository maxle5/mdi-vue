
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronLeftBoxOutline from "../../src/components/MdiChevronLeftBoxOutline.vue";

test("MdiChevronLeftBoxOutline snapshot", () => {
  const wrapper = mount(MdiChevronLeftBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
