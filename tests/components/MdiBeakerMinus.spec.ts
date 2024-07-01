
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerMinus from "../../src/components/MdiBeakerMinus.vue";

test("MdiBeakerMinus snapshot", () => {
  const wrapper = mount(MdiBeakerMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
