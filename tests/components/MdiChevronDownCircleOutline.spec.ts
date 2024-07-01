
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronDownCircleOutline from "../../src/components/MdiChevronDownCircleOutline.vue";

test("MdiChevronDownCircleOutline snapshot", () => {
  const wrapper = mount(MdiChevronDownCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
