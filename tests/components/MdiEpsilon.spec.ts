
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEpsilon from "../../src/components/MdiEpsilon.vue";

test("MdiEpsilon snapshot", () => {
  const wrapper = mount(MdiEpsilon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
