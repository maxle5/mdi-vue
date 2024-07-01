
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronRight from "../../src/components/MdiChevronRight.vue";

test("MdiChevronRight snapshot", () => {
  const wrapper = mount(MdiChevronRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
