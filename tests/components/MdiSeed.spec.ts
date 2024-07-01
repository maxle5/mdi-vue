
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeed from "../../src/components/MdiSeed.vue";

test("MdiSeed snapshot", () => {
  const wrapper = mount(MdiSeed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
