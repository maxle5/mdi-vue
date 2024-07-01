
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronTripleUp from "../../src/components/MdiChevronTripleUp.vue";

test("MdiChevronTripleUp snapshot", () => {
  const wrapper = mount(MdiChevronTripleUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
