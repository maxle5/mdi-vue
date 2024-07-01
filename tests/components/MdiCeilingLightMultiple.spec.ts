
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCeilingLightMultiple from "../../src/components/MdiCeilingLightMultiple.vue";

test("MdiCeilingLightMultiple snapshot", () => {
  const wrapper = mount(MdiCeilingLightMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
