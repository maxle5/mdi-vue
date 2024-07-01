
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronLeftBox from "../../src/components/MdiChevronLeftBox.vue";

test("MdiChevronLeftBox snapshot", () => {
  const wrapper = mount(MdiChevronLeftBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
