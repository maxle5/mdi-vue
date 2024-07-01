
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLooks from "../../src/components/MdiLooks.vue";

test("MdiLooks snapshot", () => {
  const wrapper = mount(MdiLooks, {});
  expect(wrapper.html()).toMatchSnapshot();
});
