
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRickshaw from "../../src/components/MdiRickshaw.vue";

test("MdiRickshaw snapshot", () => {
  const wrapper = mount(MdiRickshaw, {});
  expect(wrapper.html()).toMatchSnapshot();
});
