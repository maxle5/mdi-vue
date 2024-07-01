
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronLeftCircle from "../../src/components/MdiChevronLeftCircle.vue";

test("MdiChevronLeftCircle snapshot", () => {
  const wrapper = mount(MdiChevronLeftCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
