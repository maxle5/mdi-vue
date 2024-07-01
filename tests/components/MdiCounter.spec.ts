
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCounter from "../../src/components/MdiCounter.vue";

test("MdiCounter snapshot", () => {
  const wrapper = mount(MdiCounter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
