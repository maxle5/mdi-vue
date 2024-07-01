
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardBulleted from "../../src/components/MdiCardBulleted.vue";

test("MdiCardBulleted snapshot", () => {
  const wrapper = mount(MdiCardBulleted, {});
  expect(wrapper.html()).toMatchSnapshot();
});
