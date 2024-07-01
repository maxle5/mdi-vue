
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStandardDefinition from "../../src/components/MdiStandardDefinition.vue";

test("MdiStandardDefinition snapshot", () => {
  const wrapper = mount(MdiStandardDefinition, {});
  expect(wrapper.html()).toMatchSnapshot();
});
