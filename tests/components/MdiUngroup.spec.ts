
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUngroup from "../../src/components/MdiUngroup.vue";

test("MdiUngroup snapshot", () => {
  const wrapper = mount(MdiUngroup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
