
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPickaxe from "../../src/components/MdiPickaxe.vue";

test("MdiPickaxe snapshot", () => {
  const wrapper = mount(MdiPickaxe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
