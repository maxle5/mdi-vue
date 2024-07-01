
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronDownBoxOutline from "../../src/components/MdiChevronDownBoxOutline.vue";

test("MdiChevronDownBoxOutline snapshot", () => {
  const wrapper = mount(MdiChevronDownBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
