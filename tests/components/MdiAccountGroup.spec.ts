
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountGroup from "../../src/components/MdiAccountGroup.vue";

test("MdiAccountGroup snapshot", () => {
  const wrapper = mount(MdiAccountGroup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
