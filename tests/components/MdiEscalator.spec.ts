
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEscalator from "../../src/components/MdiEscalator.vue";

test("MdiEscalator snapshot", () => {
  const wrapper = mount(MdiEscalator, {});
  expect(wrapper.html()).toMatchSnapshot();
});
