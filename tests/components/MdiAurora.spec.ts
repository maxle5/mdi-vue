
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAurora from "../../src/components/MdiAurora.vue";

test("MdiAurora snapshot", () => {
  const wrapper = mount(MdiAurora, {});
  expect(wrapper.html()).toMatchSnapshot();
});
