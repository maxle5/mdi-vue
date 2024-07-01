
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronUpCircleOutline from "../../src/components/MdiChevronUpCircleOutline.vue";

test("MdiChevronUpCircleOutline snapshot", () => {
  const wrapper = mount(MdiChevronUpCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
