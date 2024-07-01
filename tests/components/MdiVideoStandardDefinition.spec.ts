
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoStandardDefinition from "../../src/components/MdiVideoStandardDefinition.vue";

test("MdiVideoStandardDefinition snapshot", () => {
  const wrapper = mount(MdiVideoStandardDefinition, {});
  expect(wrapper.html()).toMatchSnapshot();
});
