
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUltraHighDefinition from "../../src/components/MdiUltraHighDefinition.vue";

test("MdiUltraHighDefinition snapshot", () => {
  const wrapper = mount(MdiUltraHighDefinition, {});
  expect(wrapper.html()).toMatchSnapshot();
});
