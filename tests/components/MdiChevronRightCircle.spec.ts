
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronRightCircle from "../../src/components/MdiChevronRightCircle.vue";

test("MdiChevronRightCircle snapshot", () => {
  const wrapper = mount(MdiChevronRightCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
