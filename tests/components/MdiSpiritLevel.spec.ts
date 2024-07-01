
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpiritLevel from "../../src/components/MdiSpiritLevel.vue";

test("MdiSpiritLevel snapshot", () => {
  const wrapper = mount(MdiSpiritLevel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
