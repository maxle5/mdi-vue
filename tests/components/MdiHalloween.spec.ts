
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHalloween from "../../src/components/MdiHalloween.vue";

test("MdiHalloween snapshot", () => {
  const wrapper = mount(MdiHalloween, {});
  expect(wrapper.html()).toMatchSnapshot();
});
