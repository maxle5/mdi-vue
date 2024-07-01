
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransition from "../../src/components/MdiTransition.vue";

test("MdiTransition snapshot", () => {
  const wrapper = mount(MdiTransition, {});
  expect(wrapper.html()).toMatchSnapshot();
});
