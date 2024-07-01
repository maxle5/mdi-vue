
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronUpCircle from "../../src/components/MdiChevronUpCircle.vue";

test("MdiChevronUpCircle snapshot", () => {
  const wrapper = mount(MdiChevronUpCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
