
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanGreetingVariant from "../../src/components/MdiHumanGreetingVariant.vue";

test("MdiHumanGreetingVariant snapshot", () => {
  const wrapper = mount(MdiHumanGreetingVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
