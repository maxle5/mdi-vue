
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageProcessing from "../../src/components/MdiMessageProcessing.vue";

test("MdiMessageProcessing snapshot", () => {
  const wrapper = mount(MdiMessageProcessing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
