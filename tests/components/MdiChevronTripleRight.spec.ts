
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronTripleRight from "../../src/components/MdiChevronTripleRight.vue";

test("MdiChevronTripleRight snapshot", () => {
  const wrapper = mount(MdiChevronTripleRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
