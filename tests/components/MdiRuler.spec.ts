
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRuler from "../../src/components/MdiRuler.vue";

test("MdiRuler snapshot", () => {
  const wrapper = mount(MdiRuler, {});
  expect(wrapper.html()).toMatchSnapshot();
});
