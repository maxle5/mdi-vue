
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireExtinguisher from "../../src/components/MdiFireExtinguisher.vue";

test("MdiFireExtinguisher snapshot", () => {
  const wrapper = mount(MdiFireExtinguisher, {});
  expect(wrapper.html()).toMatchSnapshot();
});
