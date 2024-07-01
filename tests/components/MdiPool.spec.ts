
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPool from "../../src/components/MdiPool.vue";

test("MdiPool snapshot", () => {
  const wrapper = mount(MdiPool, {});
  expect(wrapper.html()).toMatchSnapshot();
});
