
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageBroken from "../../src/components/MdiImageBroken.vue";

test("MdiImageBroken snapshot", () => {
  const wrapper = mount(MdiImageBroken, {});
  expect(wrapper.html()).toMatchSnapshot();
});
