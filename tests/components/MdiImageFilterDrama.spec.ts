
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterDrama from "../../src/components/MdiImageFilterDrama.vue";

test("MdiImageFilterDrama snapshot", () => {
  const wrapper = mount(MdiImageFilterDrama, {});
  expect(wrapper.html()).toMatchSnapshot();
});
