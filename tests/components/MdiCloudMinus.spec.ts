
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudMinus from "../../src/components/MdiCloudMinus.vue";

test("MdiCloudMinus snapshot", () => {
  const wrapper = mount(MdiCloudMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
