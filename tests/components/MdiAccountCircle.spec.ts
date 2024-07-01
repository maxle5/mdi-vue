
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCircle from "../../src/components/MdiAccountCircle.vue";

test("MdiAccountCircle snapshot", () => {
  const wrapper = mount(MdiAccountCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
