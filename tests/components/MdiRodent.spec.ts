
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRodent from "../../src/components/MdiRodent.vue";

test("MdiRodent snapshot", () => {
  const wrapper = mount(MdiRodent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
