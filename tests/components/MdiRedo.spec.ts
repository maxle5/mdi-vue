
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRedo from "../../src/components/MdiRedo.vue";

test("MdiRedo snapshot", () => {
  const wrapper = mount(MdiRedo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
