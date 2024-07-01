
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGroup from "../../src/components/MdiGroup.vue";

test("MdiGroup snapshot", () => {
  const wrapper = mount(MdiGroup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
