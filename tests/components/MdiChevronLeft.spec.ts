
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronLeft from "../../src/components/MdiChevronLeft.vue";

test("MdiChevronLeft snapshot", () => {
  const wrapper = mount(MdiChevronLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
