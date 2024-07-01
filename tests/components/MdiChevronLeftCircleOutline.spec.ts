
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronLeftCircleOutline from "../../src/components/MdiChevronLeftCircleOutline.vue";

test("MdiChevronLeftCircleOutline snapshot", () => {
  const wrapper = mount(MdiChevronLeftCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
