
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronRightBox from "../../src/components/MdiChevronRightBox.vue";

test("MdiChevronRightBox snapshot", () => {
  const wrapper = mount(MdiChevronRightBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
