
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectGroup from "../../src/components/MdiSelectGroup.vue";

test("MdiSelectGroup snapshot", () => {
  const wrapper = mount(MdiSelectGroup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
