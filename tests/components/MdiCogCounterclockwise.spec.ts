
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogCounterclockwise from "../../src/components/MdiCogCounterclockwise.vue";

test("MdiCogCounterclockwise snapshot", () => {
  const wrapper = mount(MdiCogCounterclockwise, {});
  expect(wrapper.html()).toMatchSnapshot();
});
