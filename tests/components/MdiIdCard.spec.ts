
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIdCard from "../../src/components/MdiIdCard.vue";

test("MdiIdCard snapshot", () => {
  const wrapper = mount(MdiIdCard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
