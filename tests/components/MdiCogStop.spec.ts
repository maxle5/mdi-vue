
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogStop from "../../src/components/MdiCogStop.vue";

test("MdiCogStop snapshot", () => {
  const wrapper = mount(MdiCogStop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
