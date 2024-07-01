
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronUp from "../../src/components/MdiChevronUp.vue";

test("MdiChevronUp snapshot", () => {
  const wrapper = mount(MdiChevronUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
