
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWiper from "../../src/components/MdiWiper.vue";

test("MdiWiper snapshot", () => {
  const wrapper = mount(MdiWiper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
