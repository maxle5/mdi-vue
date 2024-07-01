
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSubway from "../../src/components/MdiSubway.vue";

test("MdiSubway snapshot", () => {
  const wrapper = mount(MdiSubway, {});
  expect(wrapper.html()).toMatchSnapshot();
});
