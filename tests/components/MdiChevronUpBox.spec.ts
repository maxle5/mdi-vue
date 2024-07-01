
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronUpBox from "../../src/components/MdiChevronUpBox.vue";

test("MdiChevronUpBox snapshot", () => {
  const wrapper = mount(MdiChevronUpBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
