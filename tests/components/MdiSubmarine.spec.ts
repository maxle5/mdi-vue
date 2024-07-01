
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSubmarine from "../../src/components/MdiSubmarine.vue";

test("MdiSubmarine snapshot", () => {
  const wrapper = mount(MdiSubmarine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
