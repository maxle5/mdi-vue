
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIron from "../../src/components/MdiIron.vue";

test("MdiIron snapshot", () => {
  const wrapper = mount(MdiIron, {});
  expect(wrapper.html()).toMatchSnapshot();
});
