
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShoeCleat from "../../src/components/MdiShoeCleat.vue";

test("MdiShoeCleat snapshot", () => {
  const wrapper = mount(MdiShoeCleat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
