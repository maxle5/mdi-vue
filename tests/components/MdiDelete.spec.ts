
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDelete from "../../src/components/MdiDelete.vue";

test("MdiDelete snapshot", () => {
  const wrapper = mount(MdiDelete, {});
  expect(wrapper.html()).toMatchSnapshot();
});
