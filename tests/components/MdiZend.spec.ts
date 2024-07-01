
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZend from "../../src/components/MdiZend.vue";

test("MdiZend snapshot", () => {
  const wrapper = mount(MdiZend, {});
  expect(wrapper.html()).toMatchSnapshot();
});
