
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarCog from "../../src/components/MdiCarCog.vue";

test("MdiCarCog snapshot", () => {
  const wrapper = mount(MdiCarCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
