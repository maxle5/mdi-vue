
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronTripleLeft from "../../src/components/MdiChevronTripleLeft.vue";

test("MdiChevronTripleLeft snapshot", () => {
  const wrapper = mount(MdiChevronTripleLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
