
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageBulleted from "../../src/components/MdiMessageBulleted.vue";

test("MdiMessageBulleted snapshot", () => {
  const wrapper = mount(MdiMessageBulleted, {});
  expect(wrapper.html()).toMatchSnapshot();
});
