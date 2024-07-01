
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSprinkler from "../../src/components/MdiSprinkler.vue";

test("MdiSprinkler snapshot", () => {
  const wrapper = mount(MdiSprinkler, {});
  expect(wrapper.html()).toMatchSnapshot();
});
