
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiJellyfish from "../../src/components/MdiJellyfish.vue";

test("MdiJellyfish snapshot", () => {
  const wrapper = mount(MdiJellyfish, {});
  expect(wrapper.html()).toMatchSnapshot();
});
