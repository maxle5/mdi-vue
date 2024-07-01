
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronDownCircle from "../../src/components/MdiChevronDownCircle.vue";

test("MdiChevronDownCircle snapshot", () => {
  const wrapper = mount(MdiChevronDownCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
