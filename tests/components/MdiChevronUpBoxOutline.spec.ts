
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronUpBoxOutline from "../../src/components/MdiChevronUpBoxOutline.vue";

test("MdiChevronUpBoxOutline snapshot", () => {
  const wrapper = mount(MdiChevronUpBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
