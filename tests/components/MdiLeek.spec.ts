
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLeek from "../../src/components/MdiLeek.vue";

test("MdiLeek snapshot", () => {
  const wrapper = mount(MdiLeek, {});
  expect(wrapper.html()).toMatchSnapshot();
});
