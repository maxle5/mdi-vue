
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourcePull from "../../src/components/MdiSourcePull.vue";

test("MdiSourcePull snapshot", () => {
  const wrapper = mount(MdiSourcePull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
