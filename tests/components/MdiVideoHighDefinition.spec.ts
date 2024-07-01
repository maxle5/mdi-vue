
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoHighDefinition from "../../src/components/MdiVideoHighDefinition.vue";

test("MdiVideoHighDefinition snapshot", () => {
  const wrapper = mount(MdiVideoHighDefinition, {});
  expect(wrapper.html()).toMatchSnapshot();
});
