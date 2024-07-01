
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRing from "../../src/components/MdiRing.vue";

test("MdiRing snapshot", () => {
  const wrapper = mount(MdiRing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
