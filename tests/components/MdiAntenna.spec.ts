
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAntenna from "../../src/components/MdiAntenna.vue";

test("MdiAntenna snapshot", () => {
  const wrapper = mount(MdiAntenna, {});
  expect(wrapper.html()).toMatchSnapshot();
});
