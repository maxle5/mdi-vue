
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronRightCircleOutline from "../../src/components/MdiChevronRightCircleOutline.vue";

test("MdiChevronRightCircleOutline snapshot", () => {
  const wrapper = mount(MdiChevronRightCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
