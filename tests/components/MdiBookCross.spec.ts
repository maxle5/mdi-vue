
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookCross from "../../src/components/MdiBookCross.vue";

test("MdiBookCross snapshot", () => {
  const wrapper = mount(MdiBookCross, {});
  expect(wrapper.html()).toMatchSnapshot();
});
