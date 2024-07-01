
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMace from "../../src/components/MdiMace.vue";

test("MdiMace snapshot", () => {
  const wrapper = mount(MdiMace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
