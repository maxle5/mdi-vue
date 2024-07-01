
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronDownBox from "../../src/components/MdiChevronDownBox.vue";

test("MdiChevronDownBox snapshot", () => {
  const wrapper = mount(MdiChevronDownBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
