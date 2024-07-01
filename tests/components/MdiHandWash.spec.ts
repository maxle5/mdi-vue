
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandWash from "../../src/components/MdiHandWash.vue";

test("MdiHandWash snapshot", () => {
  const wrapper = mount(MdiHandWash, {});
  expect(wrapper.html()).toMatchSnapshot();
});
