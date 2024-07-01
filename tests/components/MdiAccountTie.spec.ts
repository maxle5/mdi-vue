
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountTie from "../../src/components/MdiAccountTie.vue";

test("MdiAccountTie snapshot", () => {
  const wrapper = mount(MdiAccountTie, {});
  expect(wrapper.html()).toMatchSnapshot();
});
