
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanGreeting from "../../src/components/MdiHumanGreeting.vue";

test("MdiHumanGreeting snapshot", () => {
  const wrapper = mount(MdiHumanGreeting, {});
  expect(wrapper.html()).toMatchSnapshot();
});
